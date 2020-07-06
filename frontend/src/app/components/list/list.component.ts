import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service'
import {Employee} from '../../employee'
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   employees : Employee[];

  constructor(private employeeService: EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.readEmployees()
  }

  readEmployees(){
    // this.employeeService.readEmployee().subscribe
    this.employeeService.readEmployee().subscribe(
      data =>{
        console.log(data)
        this.employees = data["employees"]
      },
      error=>{
        console.log(error);
      }
    )
  }

  doUpdate(employee:Employee){
    this.employeeService.setter(employee);
    this.router.navigate(['/createUpdate'])

  }

  doDelete(employee){
    this.employeeService.deleteEmployee(employee._id).subscribe(
      data =>{
        this.employees.splice(this.employees.indexOf(employee),1);
      }
    )
  }

}
