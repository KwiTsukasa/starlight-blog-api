import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BlogGroup } from 'src/group/group.entity';
import { BlogArticle } from 'src/blog/article.entity';
import { BlogTag } from 'src/tag/tag.entity';
import { BlogComment } from 'src/comment/comment.entity';

@Entity()
export class BlogUser {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column({ select: false })
  user_psd: string;

  @Column()
  user_email: string;

  @Column()
  user_profile: string;

  @Column()
  user_img: string;

  @Column()
  user_links: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @Column()
  is_deleted: boolean;

  @OneToMany(() => BlogGroup, (blog_group) => blog_group.blog_user)
  blog_groups: BlogGroup[];

  @OneToMany(() => BlogArticle, (blog_article) => blog_article.blog_user)
  blog_articles: BlogArticle[];

  @OneToMany(() => BlogTag, (blog_tag) => blog_tag.blog_user)
  blog_tags: BlogTag[];

  @OneToMany(() => BlogComment, (blog_comment) => blog_comment.blog_user)
  blog_comments: BlogComment[];
}
