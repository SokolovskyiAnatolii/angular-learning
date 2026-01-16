import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class TestComponent {
  title = 'Це інтерполяція в TestComponent';
  fisrstName = 'Анатолій';
  secondName = 'Соколовський';

  isEnabled: boolean = true;

  getFullName(): string {
    return `Мене звати ${this.fisrstName} ${this.secondName}`;
  }

}
