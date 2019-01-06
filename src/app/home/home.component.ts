import { Component, OnInit } from '@angular/core';
import { form } from './form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signUpformValues: any = {};

  tab1: Boolean = true;
  tab2: Boolean = false;
  tab3: Boolean = false;

  step1Form = form.step1Form;
  step2Form = form.step2Form;
  step3Form = form.step3Form;

  constructor() { }

  tabBtn1() {
    if ( this.step1Form.valid) {
      this.tab1 = false;
      this.tab2 = true;
      }
  }

  tabBtn2() {
    if ( this.step2Form.valid) {
      this.tab2 = false;
      this.tab3 = true;
    }
}

backTab1() {
  this.tab1 = true;
  this.tab2 = false;
}

backTab2() {
  this.tab3 = false;
  this.tab2 = true;
}

onSubmit(val1, val2, val3) {
  if (this.step1Form.valid && this.step2Form.valid && this.step3Form.valid) {
    this.signUpformValues = {...val1, ...val2, ...val3};
  }
  console.log(this.signUpformValues);
}

  ngOnInit() {
  }

}
