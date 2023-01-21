import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogComment } from './comment.entity';
@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(BlogComment)
    private readonly userRepository: Repository<BlogComment>,
  ) {}

//   async find(username: string) {
//     const user = await this.userRepository
//       .createQueryBuilder('user')
//       .addSelect('user.user_psd')
//       .where('user.user_name = :user_name', {
//         user_name: `${username}`,
//       })
//       .getOne();
//     return user;
//   }

//   async save(user){
//     const link = await this.userRepository.create(user);
//     const save = await this.userRepository.save(link);
//     return save;
//   }

}
