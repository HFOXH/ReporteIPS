import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  AddPatientForm: FormGroup;
  Pacientes: any;
  Reportes: any;

  constructor(
    public fb: FormBuilder
  ) {
    this.AddPatientForm = this.fb.group({
      nombreReport: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      report: ['', [Validators.required]],
      paciente: ['']
    });
  }

  ngOnInit(){
    // this.Conexion.getReportes().subscribe(answer =>{
    //   console.log(answer);
    //   this.Pacientes=answer;
    // })
  }

  borrarReporte(id:number,iControl:any){
    console.log(id)
    console.log(iControl)
    if(window.confirm("¿Está seguro de borrar el registro?")){
    // this.conexion.deleteReporte().subscribe((answer)=>{
    //   this.Pacientes.splice(iControl,1);
    // })
    }
  }

  saveData(){
    console.log(this.AddPatientForm.value);
  }

}
