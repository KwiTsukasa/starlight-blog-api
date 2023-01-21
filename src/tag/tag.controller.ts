import {
  Controller,
  UseGuards,
  Get,
  //   Post,
  //   Body,
  Session,
  Req,
  Res,
  //HttpException,
  //   HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ToolsService } from 'src/utils/tool.service';
import { TagService } from './tag.service';

@UseGuards(AuthGuard('jwt'))
@Controller('tag')
export class TagController {
  constructor(
    private readonly toolsService: ToolsService,
    private readonly tagService: TagService,
  ) {} //注入服务

  @Get('getList')
  async getList(@Req() req, @Res() res, @Session() session) {
    const list = await this.tagService.all(session.user_id);
    res.send(this.toolsService.res(200, '操作成功', list)); 
  }

  @Get('getTagKv')
  async getTagKv(@Req() req, @Res() res, @Session() session) {
    console.log(session.user_id,2,req.session.user_id)
    const list = await this.tagService.kv(session.user_id);
    res.send(this.toolsService.res(200, '操作成功', list));
  }
}
