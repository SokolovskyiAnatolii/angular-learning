import { CommonModule} from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
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
  // -----------------------------------------------------

  toggleState(): void {
    this.isClickedState = !this.isClickedState;
  }

  getFullName(): string {
    return `Мене звати ${this.fisrstName} ${this.secondName}`;
  }

}
