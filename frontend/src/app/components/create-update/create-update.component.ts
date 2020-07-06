import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Employee } from '../../employee'
import { EmployeeService } from '../../shared/employee.service'

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  employee: Employee;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getter()
  }

  createOrUpdate() {
    if (this.employee._id == undefined) {

      console.log("sumbit button clicked from create form")
      this.employeeService.createEmployee(this.employee).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);

        },
        error => {
          console.log(error)
        }
      )
    }
    else{
      this.employeeService.updateEmployee(this.employee).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);

        },
        error => {
          console.log(error)
        }
      )
    }
  }
}
