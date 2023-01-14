import { Controller, Post, Res, UseGuards,Get } from '@nestjs/common';
import { ToolsService } from 'src/utils/tool.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly toolsService: ToolsService) {} //注入服务
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Res() req) {
    console.log(req.req.user);
    req.send(this.toolsService.res(200, '登录成功', req.req.user));
  }

  @UseGuards(AuthGuard('jwt'))
  @Get("/blog")
  async getBlog(@Res() req){
    req.send(this.toolsService.res(200, '测试', "test"));
  }
}
