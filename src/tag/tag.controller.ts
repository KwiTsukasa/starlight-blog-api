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
  import { TagService } from './tag.service';
  
  @Controller('tag')
  export class TagController {
    constructor(
      private readonly toolsService: ToolsService,
      private readonly tagService: TagService,
    ) {} //注入服务
  }
  