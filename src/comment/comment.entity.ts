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
export class BlogComment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @ManyToOne(() => BlogUser,blog_user => blog_user.blog_comments,{
    createForeignKeyConstraints:false
  })
  blog_user: BlogUser;

  @Column()
  comment_content: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @Column()
  is_deleted: boolean;
}
