import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { ReportsComponent } from './components/reports/reports.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:DoctorLoginComponent},
  //{path:'agregar-paciente',component:NuevoPacienteComponent},
  {path:'reportes',component:ReportsComponent},
  {path:'inicio-paciente',component:PatientLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
