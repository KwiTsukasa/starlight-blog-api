import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { BlogComment } from './comment.entity';
import { ToolsService } from 'src/utils/tool.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogComment])],
  controllers: [CommentController],
  providers: [CommentService, ToolsService],
  exports: [CommentService],
})
export class GroupModule {}
