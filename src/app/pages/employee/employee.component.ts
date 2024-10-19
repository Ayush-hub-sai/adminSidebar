import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../../core/services/employee/employee.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { Employee } from '../../core/model/employee';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees = signal<Employee[]>([]);

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.employeeService.employees$.subscribe((data) => {
      this.employees.set(data); // Update local employees array
      console.log(this.employees());
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '800px',
      data: null, // Pass null for creating a new employee
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employees.update((currentEmployees) => [...currentEmployees, result]); // Add new employee
      }
    });
  }

  editEmployee(employee: Employee): void {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '800px',
      data: employee, // Pass the selected employee for editing
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employees.update((currentEmployees) =>
          currentEmployees.map(emp => emp.id === result.id ? result : emp)
        ); // Update edited employee in the list
      }
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.employees.update((currentEmployees) =>
      currentEmployees.filter(employee => employee.id !== id)
    ); // Remove deleted employee from the list
  }
}
