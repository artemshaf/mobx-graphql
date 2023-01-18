import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'todos' })
@ObjectType()
export class TodoEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field({ defaultValue: false })
  @Column({ default: false })
  done: boolean;

  @Field({ defaultValue: new Date() })
  @CreateDateColumn()
  createdAt: Date;

  @Field({ defaultValue: new Date() })
  @UpdateDateColumn()
  updatedAt: Date;
}
