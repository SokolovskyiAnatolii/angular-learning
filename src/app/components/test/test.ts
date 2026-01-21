import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, Highlight],
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
