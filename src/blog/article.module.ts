import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { BlogArticle } from './article.entity';
import { ToolsService } from 'src/utils/tool.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogArticle])],
  controllers: [ArticleController],
  providers: [ArticleService, ToolsService],
  exports: [ArticleService],
})
export class ArticleModule {}
