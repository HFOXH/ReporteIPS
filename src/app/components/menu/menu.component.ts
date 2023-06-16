import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rol: any;
  constructor() { }

  ngOnInit() {
    this.rol = localStorage.getItem('rol');
    $(document).ready(function() {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }

  GetOut(){
    //función para cerrar sesión
    localStorage.clear();
  }

}
