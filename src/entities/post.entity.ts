import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 150 })
  title: string;

  @Column({ type: 'varchar' })
  slug?: string;

  @Column({ type: 'varchar', length: 200 })
  excerpt?: string;

  @Column({ type: 'varchar', length: 850 })
  content?: string;

  @Column({ type: 'varchar' })
  category?: string;

  @Column({ type: 'simple-array' })
  tags?: string[];

  @Column({ type: 'boolean', default: true })
  status?: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
