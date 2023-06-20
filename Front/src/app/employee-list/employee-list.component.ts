import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: any){
    this.employeeService.getEmp(id).then((data: any) => {
      this.router.navigate(['employee-details']);
    })
   
  }

  // updateEmployee(id: any){
  //   this.router.navigate(['update-employee', id]);
  // }

  updateEmployeeForm(id: any){
    this.employeeService.getEmp(id).then((data: any) => {
      this.router.navigate(['update-employee']);
    })
  }

  deleteEmployee(id: any){
    // this.employeeService.deleteEmployee(id).subscribe( data => {
    //   console.log(data);
    //   this.getEmployees();
    // })

    this.employeeService.deleteEmployee(id);
    this.getEmployees();
    this.router.navigate(['employees']);
  }

}
