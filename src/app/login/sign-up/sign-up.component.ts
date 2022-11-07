import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMismatch } from 'src/app/shared/validators/custom.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  formsignup!: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  this.initializedform();
  }
  initializedform(){
    this.formsignup =this.fb.group({
      'username': ['',[Validators.required]],
      'mobilenumber':['',[Validators.required ,Validators.minLength(10),Validators.maxLength(10)]],
      'password':['',[Validators.required]],
      'confirmpassword': ['',[Validators.required]]
    },{Validators:passwordMismatch})
  }
  signup(){

  }
  RedirectToSignin(){

  }

}
