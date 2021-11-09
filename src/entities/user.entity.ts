import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 35 })
  username!: string;

  @Column({ type: 'varchar', length: 60 })
  password?: string;

  @Column({ type: 'varchar', length: 80 })
  email!: string;

  @Column({ type: 'boolean', default: true })
  status?: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  lastLogin: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPassword() {
    if (!this.password) return;
    this.password = await hash(this.password, 10);
  }
}
