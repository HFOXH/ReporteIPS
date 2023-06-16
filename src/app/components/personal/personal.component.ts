import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit{
  AddPatientForm: FormGroup;
  EditPatientForm: FormGroup;
  EditForm: FormGroup;
  IdPaciente: any;
  
  constructor(
    public fb: FormBuilder
  ) {
    this.AddPatientForm = this.fb.group({
      inpIdentificacion: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      inpNombres: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      inpApellidos: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      inpCorreo: ['', [Validators.required,Validators.email]],
      inpCelular: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
    this.EditPatientForm = this.fb.group({
      inpNombres: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      inpApellidos: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      inpCorreo: ['', [Validators.required,Validators.email]],
      inpCelular: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
  }

  ngOnInit(){}
  public LogIn(): void {
    console.log(this.AddPatientForm.value);
    /*this._ConexionService.getAutorizacionAdministrativos(this.loginForm.value.user, this.loginForm.value.password).subscribe(data => {
      let a = JSON.parse(data);
      //console.log(a['mensaje']);
      if (a['mensaje'] === 'Datos Correctos') {
        
        this.router.navigate(['/home']);
      }
      else {
        
      }
    }, error => {
      
    });*/
  }
  editarPaciente(IdPaciente) {
  //con esta función se obtiene el valor del dato que se va a recepcionar
    this.IdPaciente = IdPaciente;
    // this.conexionService.getPaciente(this.IdPaciente).subscribe((data:any)=>{
    //   this.EditForm.patchValue(data[0]);
    // });
  }
  onEdit() {
    // En esta función con la data del formulario de editar (modal)
    // se hace POST a la BD. para actualizar :D easy
  }
}
