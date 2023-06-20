import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  // employee!: Employee;
  employee: any;
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //this.employee = new Employee();
    // this.employeService.getEmployeeById(this.id).subscribe( data => {
    //   this.employee = data;
    // });

    //this.employeService.getUser().subscribe((data: any) => {this.employee=data});
    this.employee=this.employeService.getUser();
    //console.log(this.employee);
  }

}
