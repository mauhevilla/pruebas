import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {
  nombre='';
  apellido='';
  contador = 12;

  constructor() { }

  ngOnInit() {
  }


  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

}
