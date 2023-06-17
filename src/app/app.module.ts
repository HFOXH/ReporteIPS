import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from "angular-datatables";
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportByPatientComponent } from './components/report-by-patient/report-by-patient.component';
import { PatientReportComponent } from './components/patient-report/patient-report.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PatientReportsComponent } from './components/patient-reports/patient-reports.component';
import { ConfiguracionPacienteComponent } from './components/configuracion-paciente/configuracion-paciente.component';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    ReportsComponent,
    ReportByPatientComponent,
    PatientReportComponent,
    MenuComponent,
    HomeComponent,
    PacientesComponent,
    ConfiguracionComponent,
    PersonalComponent,
    PatientReportsComponent,
    ConfiguracionPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
