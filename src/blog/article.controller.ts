import {
  Controller,
  UseGuards,
  //   Get,
  //   Post,
  //   Body,
  //   Session,
  //   Req,
  //   Res,
  //   HttpException,
  //   HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ToolsService } from 'src/utils/tool.service';
import { ArticleService } from './article.service';

@UseGuards(AuthGuard('jwt'))
@Controller('article')
export class ArticleController {
  constructor(
    private readonly toolsService: ToolsService,
    private readonly articleService: ArticleService,
  ) {} //注入服务
}
