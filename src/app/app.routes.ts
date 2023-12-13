import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetallesVideojuegoComponent } from './detalles-videojuego/detalles-videojuego.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    {path: "listado", component: ListadoComponent},
    {path: "carrito", component: CarritoComponent},
    {path: "detallesVideojuego/:id", component: DetallesVideojuegoComponent}
];
