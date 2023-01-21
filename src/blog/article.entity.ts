import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BlogUser } from 'src/user/user.entity';
import { BlogGroup } from 'src/group/group.entity';

@Entity()
export class BlogArticle {
  @PrimaryGeneratedColumn()
  blog_id: number;

  @ManyToOne(() => BlogUser, (blog_user) => blog_user.blog_articles, {
    createForeignKeyConstraints: false,
  })
  blog_user: BlogUser;

  @ManyToOne(() => BlogGroup, (blog_group) => blog_group.blog_articles, {
    createForeignKeyConstraints: false,
  })
  blog_group: BlogGroup;

  @Column()
  tag_ids: string;

  @Column()
  blog_content: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @Column()
  is_deleted: boolean;
}
