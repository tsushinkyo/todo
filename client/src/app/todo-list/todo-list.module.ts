/** ANGULAR **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** COMPONENTS **/
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

/** NGRX **/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/todo.reducers';
import { TodoEffects } from './store/todo.effects';

/** MATERIAL **/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forFeature('todoListState', reducer),
    EffectsModule.forFeature([TodoEffects]),
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
  declarations: [TodoListComponent, TodoListItemComponent],
  exports: [TodoListComponent]
})
export class TodoListModule { }
