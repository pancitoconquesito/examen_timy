import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss']
})
export class CardProductoComponent implements OnInit {

  @Input() producto:Producto={_id:0, img:'', marca:'', titulo:'', cant_estrellas:0, precio:0, descripcion:'', conectividad:'', cant_memoria_ram:0, procesador:'', duracion_bateria:0, ancho:0, recomendaciones:[]};
  listBoolEstrella:Array<boolean>=[];
  constructor() { 
    
  }

  ngOnInit(): void {
    for(let i=0;i<10;i++){
      if(i<this.producto.cant_estrellas) this.listBoolEstrella.push(true);
      else this.listBoolEstrella.push(false);
    }
  }

}
