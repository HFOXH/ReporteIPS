import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportByPatientComponent } from './components/report-by-patient/report-by-patient.component';
import { PatientReportComponent } from './components/patient-report/patient-report.component';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PatientReportsComponent } from './components/patient-reports/patient-reports.component';
import { ConfiguracionPacienteComponent } from './components/configuracion-paciente/configuracion-paciente.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:DoctorLoginComponent},
  {path:'edit-reporte-paciente',component:ReportByPatientComponent},
  {path:'reportes',component:ReportsComponent},
  {path:'inicio-paciente',component:PatientLoginComponent},
  {path:'reporte-paciente',component:PatientReportComponent},
  {path:'home',component:HomeComponent},
  {path:'pacientes',component:PacientesComponent},
  {path: 'config',component:ConfiguracionComponent},
  {path: 'personal',component:PersonalComponent},
  {path: 'mis-reportes',component:PatientReportsComponent},
  {path: 'config-paciente',component:ConfiguracionPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
