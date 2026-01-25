import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor() {}

  private todos: string[] = [];

   addTask(todo: string): void {
    this.todos.push(todo);
  }

  getTasks(): string[] {
    return this.todos;
  }

  removeTask(todo: string): void {
    this.todos = this.todos.filter(t => t !== todo);
  }

  clearAllTasks(): void {
    this.todos = [];
  }

}
