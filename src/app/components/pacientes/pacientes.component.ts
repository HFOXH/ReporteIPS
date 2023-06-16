import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit{
  AddPatientForm: FormGroup;
  EditPatientForm: FormGroup;
  EditForm: FormGroup;
  IdPaciente: any;
  
  constructor(
    public fb: FormBuilder
  ) {
    this.AddPatientForm = this.fb.group({
      inpIdentificacion: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      inpNombres: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      inpApellidos: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
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
  public addPaciente(): void {
    console.log(this.AddPatientForm.value);
    //Aqui va el metodo post para insertar la data
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
