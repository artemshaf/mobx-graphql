import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';
import { UpdateTodoInput } from './inputs/update-todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoEntity: Repository<TodoEntity>,
  ) {}

  async createTodo(createTodoInput: CreateTodoInput): Promise<TodoEntity> {
    return await this.todoEntity.save({ ...createTodoInput });
  }

  async getAllTodo(): Promise<TodoEntity[]> {
    return await this.todoEntity.find();
  }

  async removeTodoById(id: number): Promise<number> {
    await this.todoEntity.delete({ id });
    return id;
  }

  async updateTodoById(updateTodo: UpdateTodoInput): Promise<UpdateResult> {
    return this.todoEntity.update({ id: updateTodo.id }, { ...updateTodo });
  }
}
