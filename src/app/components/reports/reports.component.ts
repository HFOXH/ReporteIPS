import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { INgxSelectOption } from 'ngx-select-ex';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public ngxControl = new FormControl();
 
  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault

  public items: string[] = [
    'John',
    'Emma',
    'Michael',
    'Olivia',
    'Daniel',
    'Sophia',
    'Matthew',
    'Isabella',
    'David',
    'Emily',
    'Andrew',
    'Mia',
    'James',
    'Ava',
    'Joseph',
    'Charlotte',
    'William',
    'Amelia',
    'Benjamin',
    'Abigail'
  ];
  AddPatientForm: FormGroup;
  Pacientes: any;
  Reportes: any;

  constructor(
    public fb: FormBuilder
  ) {
    /* - - - - Importante para el select como se solicito - - - - -  */
    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
          const idx = Math.floor(Math.random() * (this.items.length - 1));
          this._ngxDefault = this.items[idx];
          // console.log('new default value = ', this._ngxDefault);
      }, 2000);
  }, 2000);
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
