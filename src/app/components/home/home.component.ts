import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  nombre: string;
  rol: string;
  Rol: string;
  ngOnInit(): void {
    //obtener el valor del nombre para mostrar en el home
    //this.nombre = localStorage.getItem('nombre_admin');
    //this.rol = localStorage.getItem('rol');
    /* Posible logica para una UX mejor */
    /*if (this.rol=='Recepcionista'){
      this.Rol = "Recepcionista"
    }else if(this.rol=='Doctor'){
      this.Rol = "Dr"
    }*/
  }
}
