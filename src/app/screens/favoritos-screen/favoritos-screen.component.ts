import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito.model';
import { Producto } from 'src/app/models/producto.model';
import { CarritoServicioService } from 'src/app/services/carrito-servicio/carrito-servicio.service';
import { FavoritoServicioService } from 'src/app/services/favorito-servicio/favorito-servicio.service';
import { ProductoServicioService } from 'src/app/services/producto-servicio/producto-servicio.service';

@Component({
  selector: 'app-favoritos-screen',
  templateUrl: './favoritos-screen.component.html',
  styleUrls: ['./favoritos-screen.component.scss']
})
export class FavoritosScreenComponent implements OnInit {

  
  listaFavoritos:Array<number>=[];
  listaProductos:Array<Producto>=[];
  total:number=0;
  listaVacia:boolean=true;
  
  constructor(private favorito_servicio:FavoritoServicioService, private carrito_servicio:CarritoServicioService, private producto_servicio:ProductoServicioService) { 
    
    
  }
  ngOnInit(): void {
    this.listaFavoritos=this.favorito_servicio.getAllFavoritos();
    if(this.listaFavoritos.length>0)this.listaVacia=false;
    this.listaFavoritos.forEach((valor) => {
      this.listaProductos.push(this.producto_servicio.getProducto(valor));
      //this.total+=this.producto_servicio.getPrecio(valor.id_producto)*valor.cantidad;
    });
  }

}
