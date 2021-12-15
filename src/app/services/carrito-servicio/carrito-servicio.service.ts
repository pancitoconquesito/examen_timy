import { Injectable } from '@angular/core';
import { _listaCarrito, _listaFavoritos } from 'src/app/BD';
import { Carrito } from 'src/app/models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoServicioService {

  listaCarrito=_listaCarrito;

  constructor() { }


  public agregarACarrito(id_producto:number, cantidad:number){
    let nuevoProductoCarrito:Carrito={
      id_producto:id_producto,
      cantidad:cantidad
    }
    this.listaCarrito.push(nuevoProductoCarrito);
  }

  public isProducto(id_producto:number):boolean{
    let valorRetorno:boolean=false;
    this.listaCarrito.forEach((valor) => {
      if(valor.id_producto==id_producto)  valorRetorno=true;
    });
    return valorRetorno;
  }
  public agregarACarritoRep(id_producto:number, cantidad:number){
    this.listaCarrito.forEach((valor) => {
      if(valor.id_producto==id_producto)  valor.cantidad=Number(valor.cantidad)+Number(cantidad);
    });
  }

  public getAllCarrito():Array<Carrito>{
    return this.listaCarrito;
  }
  public getCantidad(_id_producto:number):number{
    let cantidadRetorno:number=0;
    this.listaCarrito.forEach((valor) => {
      if(valor.id_producto==_id_producto)  cantidadRetorno=valor.cantidad;
    });
    return cantidadRetorno;
  }

  // public getAllFavoritos():Array<number>{
  //   return _listaFavoritos;
  // }

  public quitarProducto(_id:number){
    this.listaCarrito=this.listaCarrito.filter( x => x.id_producto!= _id);
  }
}
