import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-configuracion-paciente',
  templateUrl: './configuracion-paciente.component.html',
  styleUrls: ['./configuracion-paciente.component.css']
})
export class ConfiguracionPacienteComponent implements OnInit{
  changePassword: FormGroup;
  dataAdmin:FormGroup;
  CurrentPassword:string;
  NewPassword: string;
  constructor(private formBuilder: FormBuilder) {
    this.changePassword = this.formBuilder.group({
      CurrentPassword: ['', Validators.required],
      NewPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
    this.dataAdmin = this.formBuilder.group({
      inpNombre: ['', Validators.required],
      inpCorreo: ['', [Validators.required, Validators.email]],
      inpCelular: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    });
   }
  ngOnInit(): void {
    /* Obtener el id que debe estar en localstorage y hacer un GET 
    Tiene que ponerse aqui, pues es el inicializador del componente*/
  }
  public cambioData(): void {
    console.log(this.dataAdmin.value);
  }
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    const currentPassword = control.get('CurrentPassword');
    const newPassword = control.get('NewPassword');
    if (currentPassword.value === newPassword.value) {
      return { passwordMismatch: false }; // False = No tiene error
    }else{return { passwordMismatch: true };}
  };
   cambio(){
    console.log(this.changePassword.value.CurrentPassword);
    console.log(this.changePassword.value.NewPassword);
   }
}
