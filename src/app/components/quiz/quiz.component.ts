import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  @Input() formControl!: FormControl;

  codeForm1: FormControl;
  codeForm2: FormControl;
  codeForm3: FormControl;

  correctAnswers = ['ШАРМ', 'ЭЛЬ', 'ШЕЙХ']; 
  isAnswerCorrect = [false, false, false]; 

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitazer: DomSanitizer
    ){
    this.matIconRegistry.addSvgIcon("done", this.domSanitazer.bypassSecurityTrustResourceUrl("assets/done.svg"))

    this.codeForm1 = new FormControl('', [this.russianLettersValidator()]);
    this.codeForm2 = new FormControl('', [this.russianLettersValidator()]);
    this.codeForm3 = new FormControl('', [this.russianLettersValidator()]);
  }

  limitInput(event: Event, limit: number) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      const value = target.value;
  
      const limitedValue = value.replace(/[^а-яА-ЯёЁ]/g, '').substring(0, limit);
  
      target.value = limitedValue.toUpperCase();
    }
  }

  checkAnswer(index: number, event: any) {
    console.log("check answer")


    const answer = event.target.value.toUpperCase(); 
    this.isAnswerCorrect[index] = answer === this.correctAnswers[index];

    if (this.isAnswerCorrect[0]) {
      this.codeForm1.disable(); 
    } else {
      this.codeForm1.enable();
    }

    if (this.isAnswerCorrect[1]) {
      this.codeForm2.disable();
    } else {
      this.codeForm2.enable();
    }

    if (this.isAnswerCorrect[2]) {
      this.codeForm3.disable(); 
    } else {
      this.codeForm3.enable(); 
    }
  }

  russianLettersValidator = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid = /^[а-яА-ЯёЁ]{0,4}$/.test(value);
      return isValid ? null : { 'invalidRussianLetters': { value: value } };
    };
  };
  openGoogleMaps(){
    window.open('https://maps.app.goo.gl/dSRfYbFMDSuziK1HA?g_st=ic', '_blank');
  }
}
