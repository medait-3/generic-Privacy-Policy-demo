import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  exform: FormGroup;
isactive=true;pidInfoIn:string='';
  typeOfApp:string='';
  osType:any='';
  servise:any='';
  typeOfDev:string='';
  companyName:string='';
  devName:string=''
  name:string='';
  item:string='';
  devOrCompanyName: string='';
  appName: string='';
  typeOfAppTxt: string='';
  atNoCost: string='';
  myOrOur: string='';
  iOrWe: string='';
  
  meOrUs: string='';
  effectiveFromDate: string='';
  appContact:string='';
  retainedInfo: string='';
 
 
  constructor() { }

  
  ngOnInit() {

    this.exform = new FormGroup({
      'owner' : new FormControl(null, Validators.required),
      'os' : new FormControl(null, Validators.required),
      'date' : new FormControl(null, Validators.required),
      'name' : new FormControl(null, Validators.required),
      'personally' : new FormControl(),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
     // 'phone' : new FormControl(null,[  Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')  ]),
     // 'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
    }
  
    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get oss() {
      return this.exform.get('os');
    }
    get ownerr() {
      return this.exform.get('owner');
    }
    get personely() {
      return this.exform.get('personelly');
    }
    get date() {
      return this.exform.get('date');
    }
    get namee() {
      return this.exform.get('name');
    }
    get email() {
      return this.exform.get('email');
    }
   // get phone() { return this.exform.get('phone'); }
   // get message() { return this.exform.get('message');}
  
  }