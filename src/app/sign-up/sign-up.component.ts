import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  value1: Number;
  value2: Number;

  answer: any;

  constructor() { }

  cal(val1, val2, operator) {
    if ( val1 && val2 && operator && operator === 'add' ) {
          this.answer = val1 + val2;
      } else if ( val1 && val2 && operator && operator === 'subtract' ) {
          this.answer = val1 - val2;
      }
  }


  ngOnInit() {
  }

}
