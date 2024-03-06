import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputmaskOptions, createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  @Input() formControl!: FormControl;
  @Input() inputMask!: InputmaskOptions<any>;
  @Input() maskPlaceholder: string | undefined;

  value = '';
  codemask1 = createMask<void>({
    mask: "* * * *",
    definitions:{
      '*': {
        validator: "[А-Яа-я]",
      }}
  });
  codeForm1 = new FormControl('');

  codemask2 = createMask<void>({
    mask: "* * *",
    definitions:{
      '*': {
        validator: "[А-Яа-я]",
      }}
  });
  codeForm2 = new FormControl('');
  
  codemask3 = createMask<void>({
    mask: "* * * *",
    definitions:{
      '*': {
        validator: "[А-Яа-я]",
      }}
  });
  codeForm3 = new FormControl('');

  toUpper(control:FormControl) {
    const value = control.value;
    if (value) { // Добавляем проверку на наличие значения, чтобы избежать ошибок
      control.setValue(value.toUpperCase(), {emitEvent: false});
    }
  }
}
