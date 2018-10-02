import Todo from '../models/todo.model';
import { TodoState, initializeTodoState, TodoListState } from './todo.state';

import * as TodoActions from './todo.actions';


export type Action = TodoActions.TodoActions;

const defaultTodoStates: TodoState[] = [
  {
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
  }
];

const defaultState: TodoListState = {
  todoItems: defaultTodoStates,
  loading: false,
  pending: 0
};

export function reducer(state = defaultState, action: Action) {
  console.log(state, action);

  switch (action.type) {
    case TodoActions.GET_TODOS:
      return { ...state, loaded: false, loading: true };
    case TodoActions.GET_TODOS_SUCCESS:
      console.log('PAYLOAD :', action.payload);
      return { ...state, loaded: true, loading: false, todoItems: action.payload };
    case TodoActions.GET_TODOS_ERROR:
      return { ...state, loading: false };
  }
}

export const getTodoStateItems = (state: TodoListState) => state.todoItems;
