import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Todo } from "../todo";
import { TodoTag } from "../todo-tag";
import { TodoTagDataService } from "../todo-tag-data.service";

@Component({
  selector: "app-todorow",
  templateUrl: "./todorow.component.html",
  styleUrls: ["./todorow.component.less"],
  providers: [TodoTagDataService]
})
export class TodorowComponent implements OnInit {
  @Input() todo: Todo;
  @Input() removeTodo = new EventEmitter<Todo>();
  @Input() toggleTodoComplete = new EventEmitter<Todo>();

  faTimes = faTimes;

  newTodoTag: TodoTag = new TodoTag();
  todoTags: TodoTag[] = [];

  constructor(private todoTagDataService: TodoTagDataService) {}

  async ngOnInit() {
    this.todoTags = await this.todoTagDataService.filterTodoTags({
      todo: this.todo.id
    });
  }

  async addTodoTag() {
    if (!this.newTodoTag.tagText) return;

    this.newTodoTag.todoId = this.todo.id;
    var saved: TodoTag = await this.todoTagDataService.addTodoTag(
      this.newTodoTag
    );
    this.todoTags.push(saved);
    this.newTodoTag = new TodoTag();
  }

  async removeTodoTag(todoTag) {
    await this.todoTagDataService.deleteTodoTagById(todoTag.id);
    this.todoTags = this.todoTags.filter(
      (item: TodoTag) => item.id !== todoTag.id
    );
  }
}
