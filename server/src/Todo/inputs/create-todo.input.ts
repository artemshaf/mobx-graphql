import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  description: string;
}
