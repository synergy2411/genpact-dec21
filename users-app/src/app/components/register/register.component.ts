import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl()
  password = new FormControl()
  registerForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      email : this.username,
      password : this.password
    })
  }

  onRegister(){
    console.log(`
      Email : ${this.registerForm.value.email}
      Password : ${this.registerForm.value.password}
    `);
  }

  ngOnInit(): void {
  }

}
