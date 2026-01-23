import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, Highlight, TruncatePipe],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class TestComponent {
  title = 'Це інтерполяція в TestComponent';
  fisrstName = 'Анатолій';
  secondName = 'Соколовський';

  isEnabled: boolean = false;

  isActive: boolean = true;
  isDisabled: boolean = false;

  isClickedState: boolean = false;

  inputText: string = '';

  today: Date = new Date();

  price: number = 1234.56;

users =[ 'Alice', 'Bob', 'Charlie', 'David', 'Eve'];

Items = [
  { 'id': 1, 'name': 'Apple' },
  { 'id': 2, 'name': 'Banana' },
  { 'id': 3, 'name': 'Cherry' },
  { 'id': 4, 'name': 'Date' },
  { 'id': 5, 'name': 'Elderberry'}
];

appState = 'pending';

  // -----------------------------------------------------

@Input ( ) childMassage: string = '';

@Output ( ) parentMassage = new EventEmitter<string> ( ) ;
  // -----------------------------------------------------

  toggleState(): void {
    this.isClickedState = !this.isClickedState;
  }

  getFullName(): string {
    return `Мене звати ${this.fisrstName} ${this.secondName}`;
  }


  sendMessageToParent(): void {
    this.parentMassage.emit('Повідомлення від Test компонента');
  }
}
