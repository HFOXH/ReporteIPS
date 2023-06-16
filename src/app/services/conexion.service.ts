import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  //url del api
  private url = '';
  public SldUrl = this.url+'/api/';

  constructor(private http: HttpClient) { }
    //aqui van los metodos { GET ; POST; PUT; DELETE }
    getAutorizacionAdministrativos(user, password): Observable<any> {
    return this.http.get(this.url + '/' + user + '/' + password, { responseType: 'text' });
  }
  getAutorizacionPaciente(user, password): Observable<any> {
    return this.http.get(this.url + '/' + user + '/' + password, { responseType: 'text' });
  }
  // ======== Paciente ========
  getPaciente(Id: number): Observable<any> {
    return this.http.get(this.SldUrl + '/' + Id);
  }
  postPaciente(datos: any): Observable<any> {
    return this.http.post(this.SldUrl, datos);
  }
  // ======== Reportes ========
  getReportes(): Observable<any> {
    return this.http.get(this.SldUrl);
  }
  getReporte(Id: number): Observable<any> {
    return this.http.get(this.SldUrl + '/' + Id);
  }
  postReporte(datos: any): Observable<any> {
    return this.http.post(this.SldUrl, datos);
  }
  putReporte(datos: any) {
    return this.http.put(this.SldUrl, datos);
  }
  deleteReporte(Id: number): Observable<any> {
    return this.http.delete(this.SldUrl + '/' + Id);
  }
}
