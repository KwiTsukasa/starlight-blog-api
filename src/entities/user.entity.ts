import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class BlogUser {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_psd: string;

  @Column()
  user_email: string;

  @Column()
  user_profile: string;

  @Column()
  user_img: string;

  @Column()
  is_deleted: boolean;
}
