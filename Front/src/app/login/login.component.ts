import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  emailId : any;
  password : any;

  constructor(private router : Router, private empService : EmployeeService) { }

  ngOnInit(): void {
    this.empService.setUserLoggedOut();
  }

  submitForm(loginForm : any) {
    console.log(loginForm.value);

    if(loginForm.emailId === 'admin' && loginForm.password === 'admin') {
      console.log(loginForm.emailId);
      alert('Login Success!');
      this.empService.setUserLoggedIn();
      this.router.navigate(['/employees']);
    }
    else {
      console.log(loginForm.emailId);
      alert('Login Failed!');
    }
  }

}
