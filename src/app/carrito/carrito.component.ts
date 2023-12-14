import { Component } from '@angular/core';
import { VideojuegoCarrito } from '../model/videojuegoCarrito';
import { TiendaService } from '../services/tienda.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent {
  videojuegosCarrito: VideojuegoCarrito[] = {} as VideojuegoCarrito[];

  constructor(private servicioTienda: TiendaService) {}

  ngOnInit(): void {
    this.listarVideojuegosCarrito();
  }

  listarVideojuegosCarrito() {
    //Pedir los VideojuegosCarrito al servicioTienda
    this.servicioTienda
      .obtenerVideojuegosCarrito()
      .subscribe((res) => (this.videojuegosCarrito = res));
  }
  vaciarCarrito() {
    alert('Por hacer');
  }
  realizarPedido() {
    alert('Por hacer');
  }
}
