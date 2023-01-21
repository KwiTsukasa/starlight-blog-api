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
import { GroupService } from './group.service';

@UseGuards(AuthGuard('jwt'))
@Controller('group')
export class GroupController {
  constructor(
    private readonly toolsService: ToolsService,
    private readonly groupService: GroupService,
  ) {} //注入服务

  @Get('getList')
  async getList(@Req() req, @Res() res, @Session() session) {
    const list = await this.groupService.all(session.user_id);
    res.send(this.toolsService.res(200, '操作成功', list));
  }

  @Get('getGroupKv')
  async getGroupKv(@Req() req, @Res() res, @Session() session) {
    const list = await this.groupService.kv(session.user_id);
    res.send(this.toolsService.res(200, '操作成功', list));
  }
}
