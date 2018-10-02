import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromTodos from './todo.reducers';
import { TodoListState } from './todo.state';

/**
 * Selector that returns todoList Array
 */
const getTodoListStateSelector = createFeatureSelector<TodoListState>('todoListState');

export const getTodoStateItems = createSelector(
  getTodoListStateSelector,
  (state: TodoListState) =>   state.todoItems
);

