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
import { CommentService } from './comment.service';

@UseGuards(AuthGuard('jwt'))
@Controller('comment')
export class CommentController {
  constructor(
    private readonly toolsService: ToolsService,
    private readonly commentService: CommentService,
  ) {} //注入服务
}
