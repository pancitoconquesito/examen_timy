import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'src/app/models/carrito.model';
import { Producto } from 'src/app/models/producto.model';
import { CarritoServicioService } from 'src/app/services/carrito-servicio/carrito-servicio.service';
import { ProductoServicioService } from 'src/app/services/producto-servicio/producto-servicio.service';


@Component({
  selector: 'app-card-producto-carrito',
  templateUrl: './card-producto-carrito.component.html',
  styleUrls: ['./card-producto-carrito.component.scss']
})
export class CardProductoCarritoComponent implements OnInit {

  @Input() producto:Producto={_id:0, img:'', marca:'', titulo:'', cant_estrellas:0, precio:0, descripcion:'', conectividad:'', cant_memoria_ram:0, procesador:'', duracion_bateria:0, ancho:0, recomendaciones:[]};
  @Output() event_quitar:EventEmitter<number>;

  cantidad:number=0;
  constructor(private carrito_servicio:CarritoServicioService, private router:Router) {
    this.event_quitar=new EventEmitter();
  }
  
  ngOnInit(): void {
    this.cantidad=this.carrito_servicio.getCantidad(this.producto._id);
  }

  quitarProducto(){
    console.log("emite");
    this.event_quitar.emit(this.producto._id);
  }
}
