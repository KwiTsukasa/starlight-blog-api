import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BlogGroup {
  @PrimaryGeneratedColumn()
  group_id: number;

  @Column()
  user_id: number;

  @Column()
  group_content: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  @Column()
  is_deleted: boolean;
}
