
import {FormControl, FormGroup, Validators} from '@angular/forms';


export const form = {

step1Form : new FormGroup({
    name1 : new FormControl('', [
      Validators.required
    ]),
    name2 : new FormControl('', [
      Validators.required
    ])
 }),

 step2Form : new FormGroup({
  name3 : new FormControl('', [
    Validators.required
  ]),
  name4 : new FormControl('', [
    Validators.required
  ])
}),


step3Form : new FormGroup({
    name5 : new FormControl('', [
    Validators.required
    ]),
    name6 : new FormControl('', [
    Validators.required
    ])
})

};

