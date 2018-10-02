import Todo from '../models/todo.model';

export interface TodoState extends Todo {
  selected: boolean;
}

export interface TodoListState {
  todoItems: TodoState[];
  loading: boolean;
  pending: number;
}

export  const initializeTodoState = function () {
  return {
    selected: false,
  };
};

export const intializeTodoListState = function () {
  return {
    loading: false,
    pending: 0,
  };
};
