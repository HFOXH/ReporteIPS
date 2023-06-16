import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  loginForm: FormGroup;
  user: string;
  showPassword = false;
  password = '';
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public LogIn(): void {
    console.log(this.loginForm.value.user);
    console.log(this.loginForm.value.password);
    /*this._ConexionService.getAutorizacionAdministrativos(this.loginForm.value.user, this.loginForm.value.password).subscribe(data => {
      let a = JSON.parse(data);
      //console.log(a['mensaje']);
      if (a['mensaje'] === 'Datos Correctos') {
        //aqui establece la data en el localestorage para despues acceder a esos datos importantes: ej. nombre,rol
        localStorage.setItem('nombre_admin',data.nombre);
        localStorage.setItem('rol',data.rol);
        this.router.navigate(['/home']);
      }
      else {
        
      }
    }, error => {
      
    });*/
  }
}
