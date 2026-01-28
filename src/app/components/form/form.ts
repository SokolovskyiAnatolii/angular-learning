import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class FormComponent {

  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120' };
  }

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, this.ageValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    consent: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit(): void {
    console.log('Form value', this.complexForm.value);
    console.log('Form status - is valid', this.complexForm.valid);
    console.log('From controls', this.complexForm.controls); 
  }

  get name() { return this.complexForm.get('name'); }
  get email() { return this.complexForm.get('email'); }
  get age() { return this.complexForm.get('age'); }
  get password() { return this.complexForm.get('password'); }
  get consent() { return this.complexForm.get('consent'); }

}
