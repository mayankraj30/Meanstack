import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service'
import {Employee} from '../../employee'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private employees : Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.readEmployees()
  }

  readEmployees(){
    // this.employeeService.readEmployee().subscribe
    this.employeeService.readEmployee().subscribe(
      data =>{
        console.log(data)
      },
      error=>{
        console.log(error);
      }
    )
  }

}
