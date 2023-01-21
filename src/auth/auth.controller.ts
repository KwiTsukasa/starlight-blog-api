import { Controller, Post, Req, Res, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ToolsService } from 'src/utils/tool.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly toolsService: ToolsService,
  ) {} //注入服务
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Req() req, @Res() res) {
    console.log(res.req.user.user_id,1);
    req.session.user_id = res.req.user.user_id;
    res.send(this.toolsService.res(200, '登录成功', res.req.user));
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/blog')
  async getBlog(@Req() req, @Res() res) {
    res.send(this.toolsService.res(200, '测试', 'test'));
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('refreshToken')
  async refreshToken(@Req() req, @Res() res) {
    const access_token = this.authService.createToken(
      res.req.query.user_name,
      res.req.query.user_id,
    );
    req.session.user_id = res.req.query.user_id;
    res.send(this.toolsService.res(200, 'refresh', access_token));
  }
}
