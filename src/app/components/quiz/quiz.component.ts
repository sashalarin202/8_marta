import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
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
}
