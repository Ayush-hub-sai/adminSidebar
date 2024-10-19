import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../../core/services/employee/employee.service';
import { Employee } from '../../../core/model/employee';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, CommonModule],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee | null
  ) {
    this.employeeForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      position: [data?.position || '', Validators.required],
      department: [data?.department || '', Validators.required],
    });
    console.log(this.data);

  }

  save(): void {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = {
        id: this.data ? this.data.id : Math.floor(Math.random() * 10000), // Use existing ID or generate a new one
        name: this.employeeForm.value.name,
        position: this.employeeForm.value.position,
        department: this.employeeForm.value.department,
      };
      this.dialogRef.close(newEmployee); // Close dialog and return the employee data
    }
  }
}
