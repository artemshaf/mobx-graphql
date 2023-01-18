import { TodoService } from './todo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoResolver } from './todo.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
