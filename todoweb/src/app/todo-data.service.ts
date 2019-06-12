import { Injectable } from "@angular/core";
import axios from "axios";

import { Todo } from "./todo";

@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  async addTodo(todo: Todo): Promise<Todo> {
    var response = await axios.post("/api/todos/", todo.serialize());
    var data: Object = response.data;
    return Todo.deserialize(data);
  }

  async deleteTodoById(id: number): Promise<void> {
    await axios.delete(`/api/todos/${id}/`);
  }

  async updateTodoById(todo: Todo): Promise<Todo> {
    var id: number = todo.id;
    await axios.patch(`/api/todos/${id}/`, todo.serialize());
    return todo;
  }

  async getAllTodos(): Promise<Todo[]> {
    var response = await axios.get("/api/todos/");
    var data: Array<Object> = response.data;
    return data.map((child: Object) => Todo.deserialize(child));
  }
}
