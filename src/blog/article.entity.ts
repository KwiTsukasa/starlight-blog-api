import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BlogArticle {
  @PrimaryGeneratedColumn()
  blog_id: number;

  @Column()
  user_id: number;

  @Column()
  group_id: number;

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
