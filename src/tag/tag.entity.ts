import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BlogUser } from 'src/user/user.entity';

@Entity()
export class BlogTag {
  @PrimaryGeneratedColumn()
  tag_id: number;

  @ManyToOne(() => BlogUser,blog_user => blog_user.blog_tags,{
    createForeignKeyConstraints:false
  })
  blog_user: BlogUser;

  @Column()
  tag_content: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @Column()
  is_deleted: boolean;
}
