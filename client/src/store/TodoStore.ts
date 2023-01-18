import { makeAutoObservable } from "mobx";
import { ITodoListItem } from "../components/Todo/TodoList.props";

export class TodoListStore {
  private list: ITodoListItem[] = [];
  private title: string = "";
  private description: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setList = (list: ITodoListItem[]) => (this.list = list);

  changeInfoById = (id: number, newItem: ITodoListItem) =>
    this.list.map((item) => (item.id === id ? newItem : item));

  getTodoList = (): ITodoListItem[] => this.list;

  getTodoById = (id: number) => this.list.find((item) => item.id === id);

  getTitle = () => this.title;
  setTitle = (title: string) => (this.title = title);

  getDescription = () => this.description;
  setDescription = (description: string) => (this.description = description);

  addTodo = (todo: ITodoListItem) => this.list.push(todo);

  changeDoneTodoById = (id: number) =>
    (this.list = this.list.map((item) =>
      item.id !== id ? item : { ...item, done: !item.done }
    ));

  deleteTodoById = (id: number) => {
    this.list = this.list.filter((item) => item.id !== id);
  };
}
