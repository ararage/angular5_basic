import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public titulo;
  public nombreDelParque: string;
  public metros:number

  constructor() {
    this.titulo = 'Es la tienda'
  }

  ngOnInit() {
  }

  mostrarNombre(){
    console.log(this.nombreDelParque)
  }

}
