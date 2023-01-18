import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TodoListStore } from "@store";

export interface ITodoListItem {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export interface TodoListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  store: TodoListStore;
}

export interface TodoListItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  item: ITodoListItem;
  onItemChange: (item: any) => void;
  onDeleteItem: (id: number) => void;
}
