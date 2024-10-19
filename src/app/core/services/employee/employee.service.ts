import { Injectable } from '@angular/core';
import { Employee } from '../../model/employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = []; // Initial empty array of employees
  private employeesSubject = new BehaviorSubject<Employee[]>(this.employees);
  employees$ = this.employeesSubject.asObservable();


  constructor() {
    this.employees = [
      { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
      { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR' }
    ];
    this.employeesSubject.next(this.employees);
  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeesSubject.next(this.employees);
  }

  updateEmployee(updatedEmployee: Employee) {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.employeesSubject.next(this.employees);
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
    this.employeesSubject.next(this.employees);
  }
}
