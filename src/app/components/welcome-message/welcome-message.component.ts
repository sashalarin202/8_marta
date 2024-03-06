import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrl: './welcome-message.component.scss'
})
export class WelcomeMessageComponent {
  showMessage: boolean = true;

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.showMessage = false;
  //   }, 9000); 
  // }

  openQuiz (){
    this.showMessage = false;
  }
}
