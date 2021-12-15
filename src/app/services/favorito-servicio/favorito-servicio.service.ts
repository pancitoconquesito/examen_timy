import { Injectable } from '@angular/core';
import { _listaFavoritos } from 'src/app/BD';

@Injectable({
  providedIn: 'root'
})
export class FavoritoServicioService {
  listaFavoritos=_listaFavoritos.slice();

  constructor() { }

  public getAllFavoritos():Array<number>{
    return this.listaFavoritos;
  }
  public isFavorito(_id:number):boolean{
    let retorno=false;
    this.listaFavoritos.forEach((valor) => {
      if(valor==_id) retorno=true;
    });
    return retorno;
  }

  public agregarFavorito(_id:number):void{
    this.listaFavoritos.push(_id);
  }

  
  public quitarFavorito(_id:number):void{
    this.listaFavoritos=this.listaFavoritos.filter( x => x!= _id);
  }
}
