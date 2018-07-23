import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  nombre = 'Rodriguez Pablo';
  edad = 17;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio='http://www.google.com';

  constructor() { }

  ngOnInit() {
  }

// mis funciones
esActivo() {
  if (this.activo)
    return 'Trabajador Activo';
  else
    return 'Trabajador Inactivo';
}

ultimos3Sueldos() {
  let suma=0;
  for(let x=0; x<this.sueldos.length; x++)
    suma+=this.sueldos[x];
  return suma;
}



}
