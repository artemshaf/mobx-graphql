import { observer } from "mobx-react";
import { TodoListItemProps } from "./TodoList.props";

export const TodoItem = observer(
  ({ item, onItemChange, onDeleteItem }: TodoListItemProps) => {
    const { title, description, done, id } = item;
    return (
      <li>
        <h1>{title}</h1>
        <p>{description}</p>
        <input
          type="checkbox"
          checked={done}
          onChange={() => onItemChange(item)}
        />
        <button onClick={() => onDeleteItem(id)}>Delete</button>
      </li>
    );
  }
);
