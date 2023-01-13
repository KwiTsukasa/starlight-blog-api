import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ToolsService } from 'src/utils/tool.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy, ToolsService],
  controllers: [AuthController],
})
export class AuthModule {}
