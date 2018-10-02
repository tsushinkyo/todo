import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import Todo, { StatusEnum } from '../../models/todo.model';
import { TodoListState, TodoState } from '../../store/todo.state';
import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  inputText = '';
  todoList: TodoState[];
  todoItems$: Observable<TodoState[]>;

  constructor(
    private store: Store<TodoListState>
  ) { }

  ngOnInit() {
    this.buildGetTodoListState();
    this.store.dispatch(new TodoActions.GetTodos());
  }

  addTodo(): void {
    if (this.inputText) {
      let todo = new Todo();
      todo = {
        date: new Date(),
        text: this.inputText,
        status: StatusEnum.pending,
      };
    }
  }

  private buildGetTodoListState(): void {
    this.todoItems$ = this.store.select(TodoSelectors.getTodoStateItems);
  }
}
