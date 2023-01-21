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
  import { ArticleService } from './article.service';
  
  @Controller('article')
  export class ArticleController {
    constructor(
      private readonly toolsService: ToolsService,
      private readonly articleService: ArticleService,
    ) {} //注入服务
  }
  