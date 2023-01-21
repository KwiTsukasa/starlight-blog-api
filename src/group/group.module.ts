import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from './group.controller'; 
import { GroupService } from './group.service';
import { BlogGroup } from './group.entity';
import { ToolsService } from 'src/utils/tool.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogGroup])],
  controllers: [GroupController],
  providers: [GroupService, ToolsService],
  exports: [GroupService],
})
export class GroupModule {}
