import { gql, useMutation } from "@apollo/client";
import { observer } from "mobx-react";
import { TodoItem } from "./TodoItem";
import { TodoListProps } from "./TodoList.props";
const GET_TODOS = gql`
  query {
    getAllTodo {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;

const DELETE_TODO = gql`
  mutation removeTodoById($id: Float!) {
    removeTodoById(id: $id)
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodoById($updateTodoById: UpdateTodoInput!) {
    updateTodoById(updateTodoById: $updateTodoById) {
      id
      title
      description
      done
    }
  }
`;

export const TodoList = observer(({ store }: TodoListProps) => {
  const [deleteTodo, mutationOptionsDelete] = useMutation(DELETE_TODO, {
    refetchQueries: [
      {
        query: GET_TODOS,
      },
      "GET_TODOS",
    ],
  });
  const [updateTodo, mutationOptionsUpdate] = useMutation(UPDATE_TODO, {
    refetchQueries: [
      {
        query: GET_TODOS,
      },
      "GET_TODOS",
    ],
  });

  const onItemChange = (item: any) => {
    console.log(item);
    updateTodo({
      variables: {
        updateTodoById: {
          title: item.title,
          description: item.description,
          done: !item.done,
          id: +item.id,
        },
      },
    });
    console.log(mutationOptionsUpdate.error?.name);
  };
  const onDeleteItem = (id: number) => {
    deleteTodo({
      variables: {
        id,
      },
    });
  };

  return store.getTodoList().length > 0 ? (
    <ul>
      {store.getTodoList().map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onItemChange={() => onItemChange(item)}
          onDeleteItem={() => onDeleteItem(+item.id)}
        />
      ))}
    </ul>
  ) : (
    <></>
  );
});
