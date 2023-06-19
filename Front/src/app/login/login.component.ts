import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  emailId : any;
  password : any;
  constructor() { }

  ngOnInit(): void {

  }

  submitForm(loginForm : any) {
    console.log(loginForm.value);

    if(loginForm.emailId === 'admin' && loginForm.password === 'admin') {
      console.log(loginForm.emailId);
      alert('Login Success!');
    }
    else {
      console.log(loginForm.emailId);
      alert('Login Failed!');
    }
  }

}
