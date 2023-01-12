import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogUser } from 'src/entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(BlogUser)
    private readonly userRepository: Repository<BlogUser>,
  ) {}
  async loginUser(name: string, psd: string) {
    console.log(name, psd);
    const data = await this.userRepository
      .createQueryBuilder('user')
      .where('user.user_name = :user_name', {
        user_name: `${name}`,
      })
      .andWhere('user.user_psd = :user_psd', {
        user_psd: `${psd}`,
      })
      .getOne();
    //console.log(data);
    return data;
  }
}
