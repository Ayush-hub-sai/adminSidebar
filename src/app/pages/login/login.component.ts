import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router=inject(Router)
  userObj={
    userName:"",
    password:''
  }

  onLogin(){
    if(this.userObj.userName==='admin'&& this.userObj.password==='123456'){
      this.router.navigateByUrl('/dashboard');
    }
    else{
      alert("Given credential is wrong");
    }
  }
}
