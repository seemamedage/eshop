import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
   formsignin!:FormGroup
   constructor(private fb:FormBuilder) { }


   @Output() actionEmit:EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.formsignin =this.fb.group({
      'username':['',[Validators.required]],
      'password':['',[Validators.required]]

    })
  }
  signin(){
    console.log(this.formsignin.value);
  }

  RedirectToSignup(){
   this.actionEmit.emit('signup')
  }

}
