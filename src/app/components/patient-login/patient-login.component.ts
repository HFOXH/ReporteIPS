import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})

export class PatientLoginComponent {
  loginForm: FormGroup;
  forgotPForm: FormGroup;
  user: string;
  showPassword = false;
  password = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.forgotPForm = this.formBuilder.group({
      inpCorreo: ['', [Validators.required,Validators.email]]
    })
   }

  public LogIn(): void {
    console.log(this.loginForm.value.user);
    console.log(this.loginForm.value.password);
    /*this._ConexionService.getAutorizacion(this.loginForm.value.user, this.loginForm.value.password).subscribe(data => {
      let a = JSON.parse(data);
      //console.log(a['mensaje']);
      if (a['mensaje'] === 'Datos Correctos') {
        
      this.router.navigate(['/reporte-paciente']);
      }
      else {
        
      }
    }, error => {
      
    });*/
  }
  public Restore(){
    console.log(this.forgotPForm.value.inpCorreo);
  }
}
