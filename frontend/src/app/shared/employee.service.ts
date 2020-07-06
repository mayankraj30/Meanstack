import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from '../employee'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: Employee
  private baseUrl:string = "http://localhost:8080";
  private header = new HttpHeaders().set('Content-type','application/json');

  constructor(private http :HttpClient) { }

  createEmployee(employee:Employee):Observable<any>{

    return this.http.post(this.baseUrl + '/create',employee,{headers:this.header})
  }

  
  readEmployee():Observable<any>{

    return this.http.get(this.baseUrl + '/read',{headers:this.header})
  }

  
  updateEmployee(employee:Employee){

    return this.http.put(this.baseUrl + '/update',employee,{headers:this.header})
  }

  
  deleteEmployee(id:string){

    return this.http.delete(this.baseUrl + '/delete/'+id,{headers:this.header})
  }

  setter(employee:Employee){
    this.employee = employee
  }

  getter(){
    return this.employee
  }




}
