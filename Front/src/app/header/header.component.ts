import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  loginStatus: any;

  constructor(private empService : EmployeeService, private router : Router) {

  }

  ngOnInit(): void {
    
    this.empService.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    });
  }

  logout() {
    this.empService.setUserLoggedOut();
    this.router.navigate(['login']);
    // alert('working');
  }

}
