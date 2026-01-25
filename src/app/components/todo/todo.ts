import { Component } from '@angular/core';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-todo',
  imports: [],
  providers: [TodoService],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class TodoComponent {

  constructor(private todoService: TodoService) {}

  addTodo(task: string): void {
    this.todoService.addTask(task);
  }

  getTodos(): string[] {
    return this.todoService.getTasks();
  }

  removeTodo(task: string): void {
    this.todoService.removeTask(task);
  }

  clearAllTodos(): void {
    this.todoService.clearAllTasks();
  }

}
