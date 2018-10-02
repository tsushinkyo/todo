
export enum StatusEnum {
  pending = 'pending',
  done    = 'done'
}

export default class Todo {
  text: string;
  date: Date;
  status: StatusEnum;

  constructor(
  ) {
    this.text = '';
    this.date = new Date();
    this.status = StatusEnum.pending;
  }

  static generateMockTodo(): Todo {
    return {
      text: '',
      date: new Date(),
      status: StatusEnum.pending
    };
  }
}
