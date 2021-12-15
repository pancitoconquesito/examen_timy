export interface Producto{
    _id:number;
    img:string;
    marca:string;
    titulo:string;
    cant_estrellas:number;
    precio:number;
    descripcion:string;
    conectividad:string;
    cant_memoria_ram:number;
    procesador:string;
    duracion_bateria:number;
    ancho:number;
    recomendaciones:Array<number>;
}

//{_id:0, img:'', marca:'', titulo:'', cant_estrellas:0, precio:0, descripcion:'', conectividad:'', cant_memoria_ram:0, procesador:'', duracion_bateria:0, ancho:0, recomendaciones:[]}