import { Injectable } from '@angular/core';
import { _lista_productos } from 'src/app/BD';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {

  constructor() { }

  public getAllProductos():Array<Producto>{
    return _lista_productos;
  }
  public getProducto(_id:number):Producto{
    let productoRetorno:Producto={_id:0, img:'', marca:'', titulo:'', cant_estrellas:0, precio:0, descripcion:'', conectividad:'', cant_memoria_ram:0, procesador:'', duracion_bateria:0, ancho:0, recomendaciones:[]};
    _lista_productos.forEach((valor) => {
      if(valor._id==_id){
        productoRetorno=valor;
      }
    });
    return productoRetorno;
  }
  public getTitulo(_id:number):string{
    return this.getProducto(_id).titulo;
  }
  public getPrecio(_id:number):number{
    return this.getProducto(_id).precio;
  }
}
