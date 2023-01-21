import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { BlogTag } from './tag.entity';
import { ToolsService } from 'src/utils/tool.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogTag])],
  controllers: [TagController],
  providers: [TagService, ToolsService],
  exports: [TagService],
})
export class TagModule {}
