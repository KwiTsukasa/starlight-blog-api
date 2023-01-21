import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BlogUser } from 'src/user/user.entity';
import { BlogArticle } from 'src/blog/article.entity';

@Entity()
export class BlogGroup {
  @PrimaryGeneratedColumn()
  group_id: number;

  @ManyToOne(() => BlogUser,blog_user => blog_user.blog_groups,{
    createForeignKeyConstraints:false
  })
  blog_user: BlogUser;

  @Column()
  group_content: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @Column()
  is_deleted: boolean;

  @OneToMany(() => BlogArticle, (blog_article) => blog_article.blog_group)
  blog_articles: BlogArticle[];
}
