import {
  Controller,
//   Get,
//   Post,
//   Body,
//   Session,
//   Req,
//   Res,
//   HttpException,
//   HttpStatus,
} from '@nestjs/common';
import { ToolsService } from 'src/utils/tool.service';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(
    private readonly toolsService: ToolsService,
    private readonly groupService: GroupService,
  ) {} //注入服务
}
