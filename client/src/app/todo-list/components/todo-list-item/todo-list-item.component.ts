import { Component, OnInit, Input } from '@angular/core';
import { TodoState } from '../../store/todo.state';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TodoState;
  constructor() { }

  ngOnInit() {
  }

}
