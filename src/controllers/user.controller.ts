import { Controller, Get, Post, Body, Session, Req, Res } from '@nestjs/common';
import { ToolsService } from 'src/utils/tool.service';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly toolsService: ToolsService,
    private readonly userService: UserService,
  ) {} //注入服务

  @Get('authcode') //当请求该接口时，返回一张随机图片验证码
  async getCode(@Req() req, @Res() res) {
    const svgCaptcha = await this.toolsService.captche(); //创建验证码
    req.session.code = svgCaptcha.text; //使用session保存验证，用于登陆时验证
    console.log(req.session.code);
    res.type('image/svg+xml'); //指定返回的类型
    res.send(svgCaptcha.data); //给页面返回一张图片
  }

  @Post('/login')
  async login(@Body() body, @Session() session, @Res() res) {
    //验证验证码，由前端传递过来
    const { code } = body;
    if (code?.toUpperCase() === session.code?.toUpperCase()) {
      console.log('test');
      const query = await this.userService.loginUser(
        body.user_name,
        body.user_psd,
      );
      if (query) {
        const retn = this.toolsService.res(200, '登录成功', query);
        res.send(retn);
      } else {
        const retn = this.toolsService.res(400, '用户名或密码错误', {});
        res.send(retn);
      }
    } else {
      const retn = this.toolsService.res(400, '验证码错误', {});
      res.send(retn);
    }
  }
}
