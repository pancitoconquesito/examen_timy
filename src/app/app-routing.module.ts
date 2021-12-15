import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoScreenComponent } from './screens/carrito-screen/carrito-screen.component';
import { FavoritosScreenComponent } from './screens/favoritos-screen/favoritos-screen.component';
import { ProductoDetalleScreenComponent } from './screens/producto-detalle-screen/producto-detalle-screen.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';

const routes: Routes = [
  {path:'', redirectTo:'/productos', pathMatch:'full'},
  {path:'productos', component:ProductosScreenComponent},
  {path:'producto-detalle/:_id', component:ProductoDetalleScreenComponent},
  {path:'favoritos', component:FavoritosScreenComponent},
  {path:'carrito', component:CarritoScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
