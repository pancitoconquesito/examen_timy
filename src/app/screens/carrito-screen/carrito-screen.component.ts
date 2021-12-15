import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { Carrito } from 'src/app/models/carrito.model';
import { Producto } from 'src/app/models/producto.model';
import { CarritoServicioService } from 'src/app/services/carrito-servicio/carrito-servicio.service';
import { ProductoServicioService } from 'src/app/services/producto-servicio/producto-servicio.service';

@Component({
  selector: 'app-carrito-screen',
  templateUrl: './carrito-screen.component.html',
  styleUrls: ['./carrito-screen.component.scss']
})
export class CarritoScreenComponent implements OnInit {

  listaCarrito:Array<Carrito>=[];
  listaProductos:Array<Producto>=[];
  total:number=0;
  listaVacia:boolean=true;
  constructor(private carrito_servicio:CarritoServicioService, private producto_servicio:ProductoServicioService) { 
    this.total=0;
    this.listaCarrito=this.listaCarrito.splice(0,this.listaCarrito.length);
    this.listaProductos=this.listaProductos.splice(0,this.listaProductos.length);
  
    this.listaCarrito=this.carrito_servicio.getAllCarrito();
    if(this.listaCarrito.length>0)this.listaVacia=false;
  
    this.listaCarrito.forEach((valor) => {
        this.listaProductos.push(this.producto_servicio.getProducto(valor.id_producto));
        this.total+=this.producto_servicio.getPrecio(valor.id_producto)*valor.cantidad;
    });

  }
  ngOnInit(): void {
    // console.log("******"+this.listaCarrito);
  }

  
  quitarProductoCarro(e:any){
    this.carrito_servicio.quitarProducto(e);
    this.listaCarrito=this.carrito_servicio.getAllCarrito();
    let total:number=this.listaProductos.length;
    for(let i=0;i<total;i++){
      this.listaProductos.pop();
    }
    this.total=0;
    this.listaCarrito.forEach((valor) => {
      this.listaProductos.push(this.producto_servicio.getProducto(valor.id_producto));
      this.total+=this.producto_servicio.getPrecio(valor.id_producto)*valor.cantidad;
    });
    if(this.listaCarrito.length==0)this.listaVacia=true;
  }

}
