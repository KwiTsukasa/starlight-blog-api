import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogGroup } from './group.entity';
@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(BlogGroup)
    private readonly userRepository: Repository<BlogGroup>,
  ) {}

  async all(user_id: number): Promise<BlogGroup[]> {
    const groups = await this.userRepository
      .createQueryBuilder('group')
      .where('group.user_id = :user_id', {
        user_id,
      })
      .getMany();
    return groups;
  }

  async find(group_id: number, user_id: number): Promise<BlogGroup> {
    const group = await this.userRepository
      .createQueryBuilder('group')
      .where('group.group_id = :group_id', {
        group_id,
      })
      .andWhere('group.user_id = :user_id', {
        user_id,
      })
      .getOne();
    return group;
  }

  async save(group: BlogGroup): Promise<BlogGroup> {
    const link = this.userRepository.create(group);
    const save = await this.userRepository.save(link);
    return save;
  }

  async kv(user_id: number) {
    const groups = await this.all(user_id);
    if (groups) {
      const kvMap = groups.map((ele) => {
        return {
          label: ele.group_content,
          value: ele.group_id,
        };
      });
      return kvMap;
    }
    return groups;
  }
}
