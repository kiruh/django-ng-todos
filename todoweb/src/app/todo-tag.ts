export class TodoTag {
  id: number;
  tagText: string = "";
  todoId: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  static deserialize(values: Object = {}): TodoTag {
    return new TodoTag({
      id: values["id"],
      tagText: values["tag_text"],
      todoId: values["completed"]
    });
  }

  serialize(): Object {
    return {
      id: this.id,
      tag_text: this.tagText,
      todo: this.todoId
    };
  }
}
