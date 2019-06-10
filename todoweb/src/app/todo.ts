export class Todo {
  id: number;
  title: string = "";
  completed: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  static serialize(values: Object = {}): Todo {
    return new Todo({
      id: values["id"],
      title: values["todo_text"],
      completed: values["completed"]
    });
  }

  deserialize(): Object {
    return {
      id: this.id,
      todo_text: this.title,
      completed: this.completed
    };
  }
}
