import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  Req,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ToolsService } from 'src/utils/tool.service';
import { UserService } from 'src/user/user.service';

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
    res.type('image/svg+xml'); //指定返回的类型
    res.send(svgCaptcha.data); //给页面返回一张图片
  }

  @Post('/register')
  async register(@Body() body, @Session() session, @Res() res) {
    const { code } = body;
    if (code?.toUpperCase() === session.code?.toUpperCase()) {
      const query = await this.userService.find(body.username);
      if (query) {
        throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
      } else {
        const save = await this.userService.save({
          user_name: body.username,
          user_psd: body.password,
          user_email: body.useremail,
          user_profile: '',
          user_img: '',
          user_links: '',
          is_deleted: 0,
        });
        if (save) {
          const retn = this.toolsService.res(200, '注册成功', save);
          res.send(retn);
        } else {
          throw new HttpException('注册失败', HttpStatus.BAD_REQUEST);
        }
      }
    } else {
      throw new HttpException('验证码错误', HttpStatus.BAD_REQUEST);
    }
  }
}
