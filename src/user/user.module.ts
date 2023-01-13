import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { BlogUser } from './user.entity';
import { ToolsService } from 'src/utils/tool.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogUser])],
  controllers: [UserController],
  providers: [UserService, ToolsService],
  exports: [UserService],
})
export class UserModule {}
