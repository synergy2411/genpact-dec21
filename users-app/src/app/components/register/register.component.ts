import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    RegisterComponent.hasExclamation
  ])
  registerForm : FormGroup;

  static hasExclamation(control : AbstractControl){
    const exclamationExist = control.value.indexOf("!") >= 0
    return exclamationExist ? null : { needExclamation : true }
  }

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      email : this.username,
      password : this.password,
      address : new FormControl('', [Validators.required, Validators.maxLength(100)])
    })
  }

  onRegister(){
    console.log(`
      Email : ${this.registerForm.value.email}
      Password : ${this.registerForm.value.password}
      Address : ${this.registerForm.value.address}
    `);
  }

  ngOnInit(): void {
  }

}
