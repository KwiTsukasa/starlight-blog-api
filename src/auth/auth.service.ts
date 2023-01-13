import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  /**
   * validate user name and password
   * @param username
   * @param password
   */
  async validate(username: string, password: string) {
    console.log(username)
    const user = await this.userService.find(username);
    // 注：实际中的密码处理应通过加密措施
    if (user && user.user_psd === password) {
      return user;
    } else {
      return null;
    }
  }
}