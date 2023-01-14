import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  /**
   * validate user name and password
   * @param username
   * @param password
   */
  async validate(username: string, password: string) {
    const user = await this.userService.find(username);
    // 注：实际中的密码处理应通过加密措施
    if (user && user.user_psd === password) {
      const token = this.createToken(username, password);
      return { ...Object.assign(user), access_token: token };
    } else {
      return null;
    }
  }

  createToken(username: string, password: string) {
    const token = this.jwtService.sign({ username, password });
    return token;
  }

  async verifyToken(token: string) {
    try {
      if (!token) return false;
      const id = this.jwtService.verify(token.replace('Bearer ', ''));
      return id;
    } catch (e) {
      return false;
    }
  }
}
