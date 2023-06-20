import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../employee/employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/getAllEmployees";

  emp: any;
  loginStatus: Subject<any>;

  setUser(emp: any) {
    console.log(emp);
    this.emp = emp;
  }

  getUser(): any {
    return this.emp;
  }


  constructor(private httpClient: HttpClient, private router: Router) {
    this.loginStatus = new Subject();
   }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }



  async getEmp(id: any) {

    await this.getEmployeeById(id).then((data: any) => {

      if (data != null) {
       
        this.setUser(data);
        //this.router.navigate(['employee-details']);
      } else {
        alert("Not a registered user !");
      }
    });

  }

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  setUserLoggedIn() {
    this.loginStatus.next(true);
  }

  setUserLoggedOut() {
      this.loginStatus.next(false);

  }
























  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post('http://localhost:8080/createEmployee', employee);
  }

  // getEmployeeById(id: number): Observable<Employee>{
  //   return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  // }
  getEmployeeById(id: number) {
    return this.httpClient.get('http://localhost:8080/employees/' + id).toPromise();
  }


  // updateEmployee(id: number, employee: Employee): Observable<Object> {
  //   return this.httpClient.put('http://localhost:8080/employees/{id}', employee);
  // }

    updateEmployee(id: any, employee: any) {
      console.log("working" +employee+","+id);
    return this.httpClient.put('http://localhost:8080/employees/'+id, employee).toPromise();
  }



  // deleteEmployee(id: number): Observable<Object> {
  //   return this.httpClient.delete('http://localhost:8080/employees/{id}');
  // }
  deleteEmployee(id: number) {
    return this.httpClient.delete('http://localhost:8080/employees/'+id).toPromise();
  }
}
