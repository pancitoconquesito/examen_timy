import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoServicioService } from 'src/app/services/producto-servicio/producto-servicio.service';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.scss']
})
export class ProductosScreenComponent implements OnInit {

  listaProductos:Array<Producto>=[];
  constructor(private producto_servicio:ProductoServicioService) { }

  ngOnInit(): void {
    this.listaProductos=this.producto_servicio.getAllProductos();
  }

}
