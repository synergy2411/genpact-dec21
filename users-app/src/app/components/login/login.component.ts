import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    debugger;
    console.log(`
    Username : ${form.value.username}
    Password : ${form.value.password}
    `);
    this.router.navigate(["/users"])
    localStorage.setItem("token", "MY_TOKEN")
  }
}
