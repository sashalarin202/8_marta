import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { InputmaskOptions } from '@ngneat/input-mask';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  @Input() formControl!: FormControl;
  @Input() inputMask!: InputmaskOptions<any>;

  value = '';

  codeForm1: FormControl;
  codeForm2: FormControl;
  codeForm3: FormControl;

  constructor(){
    this.codeForm1 = new FormControl('', [this.russianLettersValidator()]);
    this.codeForm2 = new FormControl('', [this.russianLettersValidator()]);
    this.codeForm3 = new FormControl('', [this.russianLettersValidator()]);
  }

  limitInput(event: Event, limit: number) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      const value = target.value;
  
      // Оставляем только русские буквы и ограничиваем длину до 3 символов
      const limitedValue = value.replace(/[^а-яА-ЯёЁ]/g, '').substring(0, limit);
  
      // Обновляем значение поля с ограниченными данными
      target.value = limitedValue.toUpperCase(); // Если вам нужны только заглавные буквы
    }
  }


  russianLettersValidator = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid = /^[а-яА-ЯёЁ]{0,4}$/.test(value);
      return isValid ? null : { 'invalidRussianLetters': { value: value } };
    };
  };
}
