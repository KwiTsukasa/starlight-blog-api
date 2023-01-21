import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BlogTag {
  @PrimaryGeneratedColumn()
  tag_id: number;

  @Column()
  user_id: number;

  @Column()
  tag_content: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @Column()
  is_deleted: boolean;
}
