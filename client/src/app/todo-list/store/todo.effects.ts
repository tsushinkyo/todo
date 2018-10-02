/** Angular **/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/** NGRX **/
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { TodoState } from './todo.state';
import * as TodoActions from './todo.actions';

import { environment } from '../../../environments/environment';
import { Action } from './todo.reducers';


@Injectable()
export class TodoEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  @Effect()
  GetTodos$: Observable<Action> = this.actions$.
    ofType<TodoActions.GetTodos>(TodoActions.GET_TODOS)
    .pipe(
      mergeMap(action => this.http.get('https://api.myjson.com/bins/bsrds')
        .pipe(
          map((data: TodoState[]) => {
            return new TodoActions.GetTodosSuccess(data);
          }),
          catchError((error) => of(new TodoActions.GetTodosError(error))),
      )
    )
    );

}
