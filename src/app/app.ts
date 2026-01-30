import { Component, signal, Type } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test';
import { TodoComponent } from './components/todo/todo';
import { FormComponent } from './components/form/form';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    TestComponent,
    TodoComponent,
    FormComponent
  ],
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
