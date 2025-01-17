import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { error } from 'console';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  id!: number
  employee: Employee = new Employee();
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }
  
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe( data => {
    this.employee = data;
   }, error => console.log(error));

   }

}
