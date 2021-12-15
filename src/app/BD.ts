import { Carrito } from "./models/carrito.model";
import { Producto } from "./models/producto.model";

export let _lista_productos:Array<Producto>=[
    {_id:0, 
    img:'https://clmoto.vtexassets.com/arquivos/ids/159056-1200-1200?v=637553315516870000&width=1200&height=1200&aspect=true', 
    marca:'Motolora', 
    titulo:'Moto g20 - rosa flamingo 64GB', 
    cant_estrellas:5, precio:129990, 
    descripcion:'El nuevo moto g20 cuenta con un avanzado sistema de 4 cámaras. Anhelas un sensor de 48 MP¹ y cámaras que se adapten a cada situación. Es tuyo. Qué tal una pantalla ultra amplia más fluida. Listo. Necesitas hasta 2 días de batería². No hay problema. Quieres selfies espectaculares de día o de noche. Dalo por hecho. Buscas capturar tu vida sin comprometer el desempeño. Con el moto g20, es posible.', 
    conectividad:'Wi-Fi 802.11 a/b/g/n/ac - 2.4 and 5 GHz', 
    cant_memoria_ram:64, procesador:'UNISOC T700 2x ARM Cortex-A75 @ 1.8GHz 6x', 
    duracion_bateria:5000, ancho:7.57, 
    recomendaciones:[1,2]},

    {_id:1, 
    img:'https://www.abcdin.cl/media/catalog/product/1/1/1145188f13_3.jpg?optimize=high&fit=bounds&height=&width=&canvas=:', 
    marca:'ZTE', 
    titulo:'Smartphone A3 2020 32 GB', 
    cant_estrellas:2, precio:49990, 
    descripcion:'El nuevo Smartphone A3 cuenta con un avanzado sistema de 4 cámaras. Anhelas un sensor de 48 MP¹ y cámaras que se adapten a cada situación. Es tuyo. Qué tal una pantalla ultra amplia más fluida. Listo. Necesitas hasta 2 días de batería². No hay problema. Quieres selfies espectaculares de día o de noche. Dalo por hecho. Buscas capturar tu vida sin comprometer el desempeño. Con el moto g20, es posible.', 
    conectividad:'Wi-Fi 802.11 a/b/g/n/ac - 2.4 and 5 GHz', 
    cant_memoria_ram:32, procesador:'	Unisoc SC9832E', 
    duracion_bateria:2600, ancho:7, 
    recomendaciones:[2]},

    {_id:2, 
    img:'https://www.abcdin.cl/media/catalog/product/1/1/1146681f13_3.jpg?optimize=high&fit=bounds&height=550&width=550&canvas=550:550', 
    marca:'Xiaomi', 
    titulo:'Smartphone Poco M3 64 GB', 
    cant_estrellas:7, precio:169990, 
    descripcion:'El nuevo Smartphone Poco M3 64 GB cuenta con un avanzado sistema de 4 cámaras. Anhelas un sensor de 48 MP¹ y cámaras que se adapten a cada situación. Es tuyo. Qué tal una pantalla ultra amplia más fluida. Listo. Necesitas hasta 2 días de batería². No hay problema. Quieres selfies espectaculares de día o de noche. Dalo por hecho. Buscas capturar tu vida sin comprometer el desempeño. Con el moto g20, es posible.', 
    conectividad:'2G: B2/3/5/8 - 3G: B1/2/4/5/8', 
    cant_memoria_ram:64, procesador:'Qualcomm SM6115 Snapdragon 662', 
    duracion_bateria:6000, ancho:7.57, 
    recomendaciones:[0]},
    
    {_id:3, 
    img:'https://i.linio.com/p/ff87a8b3f1758dfef97eb079d3ae0ba6-product.webp', 
    marca:'Samsung', 
    titulo:'Samsung Galaxy S9 64GB', 
    cant_estrellas:6, precio:229990, 
    descripcion:'Esta vez Samsung ha decidido dar un nuevo paso enfocándose en el desarrollo de una nueva gama de smartphones pensada para ir de la mano de una nueva generación. Su sorprendente cámara que funciona como el ojo humano, los nuevos AR emojis, la pantalla infinita y el procesador de última generación; hacen de este equipo la mejor opción de comunicación, productividad y entretenimiento.', 
    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:64, procesador:'Exynos 9810', 
    duracion_bateria:5400, ancho:7.2, 
    recomendaciones:[1]},

    {_id:4, 
    img:'https://i.linio.com/p/c48925fec9ae22f38264d95bf385235a-product.webp', 
    marca:'Apple', 
    titulo:'iPhone 12 Pro 256GB', 
    cant_estrellas:8, precio:1049900, 
    descripcion:'El 5G llega al Pro. El chip A14 Bionic no admite comparación con el de ningún otro smartphone. El avanzado sistema de cámaras lleva la fotografía con poca iluminación a otro nivel y alcanza su máxima expresión en el iPhone 12 Pro Max. Y el Ceramic Shield ofrece cuatro veces más resistencia a las caídas. El iPhone 12 Pro abre un universo de posibilidades.', 
    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:256, procesador:'Apple A14 Bionic', 
    duracion_bateria:2815, ancho:7.2, 
    recomendaciones:[3]},

    {_id:5, 
    img:'https://i.linio.com/p/362deaae4280dfe49b18baadb68e40f0-product.webp', 
    marca:'Vivo', 
    titulo:'Vivo V20 8GB', 
    cant_estrellas:3, precio:399990, 
    descripcion:'La claridad y el enfoque que desea. Disfrute de hermosos retratos llenos de color. La cámara frontal principal ultra HD captura la belleza en los detalles más complejos junto con su nítido zoom. La belleza de las selfies proviene de los detalles.', 
    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:8, procesador:'Qualcomm® Snapdragon™ 720G', 
    duracion_bateria:4000, ancho:6.8, 
    recomendaciones:[1]},

    {_id:6, 
    img:'https://i.linio.com/p/ded4a148fc84c3ed003c5edb532e786a-product.webp', 
    marca:'Vivo', 
    titulo:'Vivo V21 8 GB', 
    cant_estrellas:4, precio:499990, 
    descripcion:'El V21 5G posee una cámara frontal de 44 MP con estabilización óptica de imagen, única en todo el mercado.La exclusiva luz doble para selfies de la cámara frontal, está hecha justo a tu medida para mejorar las selfies y videos frontales que se toman en condiciones de poca luz. El brillo añadido hará que tu rostro se vea más radiante y atractivo.', 
    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:8, procesador:'Mediatek', 
    duracion_bateria:4000, ancho:6.8, 
    recomendaciones:[5]},

    {_id:7, 
    img:'https://i.linio.com/p/bab0f5872e9f8c195088b77a288f8da2-product.webp', 
    marca:'Apple', 
    titulo:' Iphone apple 8 64gb', 
    cant_estrellas:5, precio:229990, 

    descripcion:'Los celulares inteligentes se han convertido en la mejor alternativa y esta versión no es ajena a esto, cuenta con un sistema inteligente el cual te permite explorar multifunciones e interactuar con las actividades que llevas a cabo en tu rutina, transformándolas en algo más fácil, moderno y divertido. Su pantalla Retina de HD de 4.7 pulgadas cuenta con una resolución de 1334x750 pixeles. Cuenta con un procesador A11 Bionic y sustema operativo iOS 12 y una cámara de 12MP en su sensor principal y cámara frontoal de 7MP para que captures lo mejores momentos.', 

    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:64, procesador:'Bionic de 64 bits', 
    duracion_bateria:4000, ancho:7, 
    recomendaciones:[3,2,0]},

    {_id:8, 
    img:'https://i.linio.com/p/0c3284825f16a75a178f94079fae5e8d-product.webp', 
    marca:'Apple', 
    titulo:'iPhone 12', 
    cant_estrellas:6, precio:779990, 
    
    descripcion:'Tecnología 5G. Chip A14 Bionic, el más veloz en un smartphone. Pantalla OLED de borde a borde. Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en cada una de las cámaras. Y dos tamaños: ideal y perfecto. Sí, el iPhone 12 lo tiene todo.', 

    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:4, procesador:'Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)', 
    duracion_bateria:2815 , ancho:7, 
    recomendaciones:[5,4,7]},

    {_id:9, 
    img:'https://i.linio.com/p/71bf082139305b3a7316f69b04c51411-product.webp', 
    marca:'Samsung', 
    titulo:'Samsung Galaxy S21 Ultra 256GB', 
    cant_estrellas:10, precio:969990, 
    
    descripcion:'Presentamos el Galaxy S21 Ultra 5G. Diseñado con una sola cámara en los contornos de un marco para crear una revolución en fotografía. Podrás hacer videos cinematográficos en 8K y tomar fotos épicas, todo al mismo tiempo. Además, cuenta con el chip más rápido en un teléfono Galaxy, el vidrio más resistente, velocidad 5G y una batería que dura todo, “Ultra” realmente le rinde honor a su nombre.', 

    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:12, procesador:' Exynos 2100 5 nm, 64 bits', 
    duracion_bateria:4000 , ancho:7, 
    recomendaciones:[5,4,3]},

    {_id:10, 
    img:'https://i.linio.com/p/fbb94c68d5402fc48ac2cfece7d89a4c-product.webp', 
    marca:'Oppo', 
    titulo:'Celular Oppo A54', 
    cant_estrellas:1, precio:179990, 
    
    descripcion:'Diseño 3D elegante con una sensación aún más elegante. El diseño de la parte posterior es de primera calidad. Con un marco de 0,2 mm de grosor y un cuerpo 3D delicadament elaborado, tendrás una sensación más elegante en la palma de la mano.', 

    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:4, procesador:'Mediatek Helio P65', 
    duracion_bateria:5000 , ancho:5.8, 
    recomendaciones:[0]},

    {_id:11, 
    img:'https://i.linio.com/p/d6104284ab3407f453aadaf2da287e70-product.webp', 
    marca:'Oppo', 
    titulo:'Reno 5 Lite', 
    cant_estrellas:2, precio:1249990, 
    
    descripcion:'El Reno5 Lite es ese tipo de smartphone que logra sacarte siempre una sonrisa al momento de utilizarlo. La fluidez del sistema, su belleza y elegancia harán que disfrutes cada momento que estés utilizando.', 

    conectividad:'Wi-Fi 802.11ac (2.4 y 5GHz) MU-MIMO, Bluetooth 5.0', 
    cant_memoria_ram:4, procesador:'Mediatek Helio G95', 
    duracion_bateria:4300 , ancho:6.5, 
    recomendaciones:[9,8,5,0,3]}
];












//////////////////

export let _listaCarrito:Array<Carrito>=[
];

/////////////////
export let _listaFavoritos:Array<number>=[];