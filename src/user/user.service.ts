import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogUser } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(BlogUser)
    private readonly userRepository: Repository<BlogUser>,
  ) {}

  async find(username: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.user_psd')
      .where('user.user_name = :user_name', {
        user_name: `${username}`,
      })
      .getOne();
    return user;
  }

  async save(user){
    const link = await this.userRepository.create(user);
    const save = await this.userRepository.save(link);
    return save;
  }

}
