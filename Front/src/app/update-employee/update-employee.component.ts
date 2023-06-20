import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  
  id: any;
 // employee: Employee = new Employee();
 employee :any
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];

    // this.employeeService.getEmployeeById(this.id).subscribe(data => {
    //   this.employee = data;
    // }, error => console.log(error));
    this.employee=this.employeeService.getUser();
    console.log(this.employee);
  }

  onSubmit(){
    // console.log(this.employee);
    this.employeeService.updateEmployee(this.employee.id, this.employee).then( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
