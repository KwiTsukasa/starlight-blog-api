import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogTag } from './tag.entity';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(BlogTag)
    private readonly userRepository: Repository<BlogTag>,
  ) {}

  async all(user_id: number): Promise<BlogTag[]> {
    const tags = await this.userRepository
      .createQueryBuilder('tag')
      .where('tag.user_id = :user_id', {
        user_id,
      })
      .getMany();
    return tags;
  }

  async find(tag_id: number, user_id: number): Promise<BlogTag> {
    const tag = await this.userRepository
      .createQueryBuilder('tag')
      .where('tag.tag_id = :tag_id', {
        tag_id,
      })
      .andWhere('tag.user_id = :user_id', {
        user_id,
      })
      .getOne();
    return tag;
  }

  async save(tag: BlogTag): Promise<BlogTag> {
    const link = this.userRepository.create(tag);
    const save = await this.userRepository.save(link);
    return save;
  }

  async kv(user_id: number) {
    const tags = await this.all(user_id);
    if (tags) {
      const kvMap = tags.map((ele) => {
        return {
          label: ele.tag_content,
          value: ele.tag_id,
        };
      });
      return kvMap;
    }
    return tags;
  }
}
