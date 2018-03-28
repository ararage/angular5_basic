import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {

  @Input() public nombre:string;
  @Input('metros_recibidos')public metros:number;
  public vegetacion:string;
  public abierto:boolean;

  constructor() { 
    this.nombre = 'Parque natural'
    this.metros = 450;
    this.vegetacion = 'Alta'
    this.abierto = true
  }

  ngOnInit() {
  }

}
