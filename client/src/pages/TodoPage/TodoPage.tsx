import { TodoList } from "@components";
import { TodoListStore } from "@store";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { ITodoListItem } from "@components";
import { useQuery, gql, useMutation } from "@apollo/client";

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

const ADD_TODO = gql`
  mutation createTodo($createTodo: CreateTodoInput!) {
    createTodo(createTodo: $createTodo) {
      description
      title
    }
  }
`;

export const TodoPage = observer(() => {
  const [todosStore, setTodosStore] = useState(() => new TodoListStore());
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  const [addTodo, mutationOptionsCreate] = useMutation<
    Pick<ITodoListItem, "title" | "description">
  >(ADD_TODO, {
    variables: {
      createTodo: {
        title: todosStore.getTitle(),
        description: todosStore.getDescription(),
      },
    },
    refetchQueries: [
      {
        query: GET_TODOS,
      },
      "GET_TODOS",
    ],
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    todosStore.setTitle(value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    todosStore.setDescription(value);
  };
  const onClick = () => {
    addTodo();
  };

  useEffect(() => {
    console.log("render");
  }, []);

  useEffect(() => {
    if (data) {
      todosStore.setList(data.getAllTodo);
    }
  }, [data]);

  return (
    <>
      <input value={todosStore.getTitle()} onChange={onChangeTitle} />
      <input
        value={todosStore.getDescription()}
        onChange={onChangeDescription}
      />
      <button onClick={onClick}>Submit</button>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.name}</h2>
      ) : (
        <TodoList store={todosStore} />
      )}
    </>
  );
});
