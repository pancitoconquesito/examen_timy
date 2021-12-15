import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { Recomendacion } from 'src/app/models/recomendacion.models';
import { CarritoServicioService } from 'src/app/services/carrito-servicio/carrito-servicio.service';
import { FavoritoServicioService } from 'src/app/services/favorito-servicio/favorito-servicio.service';
import { ProductoServicioService } from 'src/app/services/producto-servicio/producto-servicio.service';
import { FavoritosScreenComponent } from '../favoritos-screen/favoritos-screen.component';

@Component({
  selector: 'app-producto-detalle-screen',
  templateUrl: './producto-detalle-screen.component.html',
  styleUrls: ['./producto-detalle-screen.component.scss']
})
export class ProductoDetalleScreenComponent implements OnInit {

  productoActual:Producto={_id:0, img:'', marca:'', titulo:'', cant_estrellas:0, precio:0, descripcion:'', conectividad:'', cant_memoria_ram:0, procesador:'', duracion_bateria:0, ancho:0, recomendaciones:[]};
  listaRecomendaciones:Array<Recomendacion>=[];
  input_cantidad:any;
  esFavorito:boolean;
  constructor(private rutaActiva:ActivatedRoute, private producto_servicio:ProductoServicioService, private carrito_servicio:CarritoServicioService, private favorito_servicio:FavoritoServicioService) {
    this.esFavorito=false;
    this.rutaActiva.params.subscribe( param=>{
      this.productoActual=this.producto_servicio.getProducto(param['_id']);
      this.listaRecomendaciones.splice(0,this.listaRecomendaciones.length);
      this.productoActual.recomendaciones.forEach((valor) => {
        let nuevaRecomendacion:Recomendacion={
          _id_producto:valor,
          titulo_producto:this.producto_servicio.getTitulo(valor)
        }
        this.listaRecomendaciones.push(nuevaRecomendacion);
      });
      
      
    });
    
  }
  
  ngOnInit(): void {
    this.input_cantidad=document.getElementById("input_cantidad");
    // console.log("_____"+this.input_cantidad.value);
    if(this.favorito_servicio.isFavorito(this.productoActual._id)) this.esFavorito=true;
  }

  agregarACarrito(){
    if(this.carrito_servicio.isProducto(this.productoActual._id)){
      let opcion = confirm("El producto ya se encuentra en el carrito. Desea Agregarlos al Carro?");
      if (opcion == true){
        this.carrito_servicio.agregarACarritoRep(this.productoActual._id, this.input_cantidad.value);
      }
        

    }else{

      this.carrito_servicio.agregarACarrito(this.productoActual._id, this.input_cantidad.value);
      alert("Producto agregado exitosamente!");
    }
  }
  favorito(){
    if(this.favorito_servicio.isFavorito(this.productoActual._id)){
      this.favorito_servicio.quitarFavorito(this.productoActual._id);
      // console.log("quitar");
      this.esFavorito=false;
    }else{
      this.favorito_servicio.agregarFavorito(this.productoActual._id);
      // console.log("agregar");
      this.esFavorito=true;
    }
  }
}
