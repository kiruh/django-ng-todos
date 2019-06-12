import { Injectable } from "@angular/core";
import axios from "axios";

import { TodoTag } from "./todo-tag";
import { Todo } from "./todo";

@Injectable()
export class TodoTagDataService {
  async addTodoTag(todoTag: TodoTag): Promise<TodoTag> {
    console.log(todoTag);
    var response = await axios.post("/api/todotags/", todoTag.serialize());
    var data: Object = response.data;
    return TodoTag.deserialize(data);
  }

  async deleteTodoTagById(id: number): Promise<void> {
    await axios.delete(`/api/todotags/${id}/`);
  }

  async filterTodoTags(params: Object = {}): Promise<TodoTag[]> {
    var response = await axios.get("/api/todotags/", {
      params
    });
    var data: Array<Object> = response.data;
    return data.map((child: Object) => TodoTag.deserialize(child));
  }
}
