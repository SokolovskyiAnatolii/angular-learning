import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
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

  toggleState(): void {
    this.isClickedState = !this.isClickedState;
  }

  getFullName(): string {
    return `Мене звати ${this.fisrstName} ${this.secondName}`;
  }

}
