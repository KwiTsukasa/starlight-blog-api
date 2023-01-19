import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
    this.authService = authService;
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validate(username, password);
    if (user && !user.is_deleted) return user;
    else if (user && user.is_deleted)
      throw new BadRequestException('账号不存在');
    else throw new BadRequestException('用户名或密码错误');
  }
}
