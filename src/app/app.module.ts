import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { FavoritosScreenComponent } from './screens/favoritos-screen/favoritos-screen.component';
import { CarritoScreenComponent } from './screens/carrito-screen/carrito-screen.component';
import { ProductoDetalleScreenComponent } from './screens/producto-detalle-screen/producto-detalle-screen.component';
import { CardProductoCarritoComponent } from './components/card-producto-carrito/card-producto-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardProductoComponent,
    ProductosScreenComponent,
    FavoritosScreenComponent,
    CarritoScreenComponent,
    ProductoDetalleScreenComponent,
    CardProductoCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
