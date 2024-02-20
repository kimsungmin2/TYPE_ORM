import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Usersis } from './user.entity';

@Entity('Resumes')
export class Resumes {
  @PrimaryGeneratedColumn()
  resumeId: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Usersis, (user) => user.userId, { onDelete: 'CASCADE' })
  user: Usersis;
}
