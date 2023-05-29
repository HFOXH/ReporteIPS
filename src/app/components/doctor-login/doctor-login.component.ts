import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  showPassword = false;
  password = '';
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
