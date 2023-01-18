import { DeleteResult, UpdateResult } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { Resolver, Mutation, Query, Args, ID } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './inputs/create-todo.input';
import { UpdateTodoInput } from './inputs/update-todo.input';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => TodoEntity)
  async createTodo(
    @Args('createTodo') createTodoInput: CreateTodoInput,
  ): Promise<TodoEntity> {
    return await this.todoService.createTodo(createTodoInput);
  }

  @Query(() => [TodoEntity])
  async getAllTodo(): Promise<TodoEntity[]> {
    return await this.todoService.getAllTodo();
  }

  @Mutation(() => Number)
  async removeTodoById(@Args('id') id: number): Promise<number> {
    return await this.todoService.removeTodoById(id);
  }

  @Mutation(() => TodoEntity)
  async updateTodoById(
    @Args('updateTodoById') updateTodoInput: UpdateTodoInput,
  ): Promise<UpdateResult> {
    return await this.todoService.updateTodoById(updateTodoInput);
  }
}
