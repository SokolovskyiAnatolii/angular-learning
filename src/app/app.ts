import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test';
import { TodoComponent } from './components/todo/todo';
import { FormComponent } from './components/form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent,TodoComponent,FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-first-app');

  manageMessageFromChild: string = '';

  handleMessageFromChild(message: string): void {
    this.manageMessageFromChild = message;
    console.log('Повідомлення від дочірнього компонента:', message);
  }


  massageFromParent: string = 'Повідомлення від App компонента';
}
