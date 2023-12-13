import { Injectable } from '@angular/core';
import { Videojuego } from '../model/videojuego';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  // ruta_webservices = "/web_services/" //esto es para el hosting
  // ruta_webservices = "/server/" //esto es para local
  ruta_webservices = '/server/';
  //Todas las operaciones con el servicor se realizaran desde este servicio
  constructor(private http: HttpClient) {}

  obtenerVideojuegos(): Observable<Videojuego[]> {
    console.log(
      'comunicar con el servicioWeb para obtener el json de videojuegos'
    );

    return this.http.get<Videojuego[]>(
      this.ruta_webservices + 'web_services/videojuegos.php'
    );
  }
  obtenerVideojuegoPorId(id: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(
      this.ruta_webservices + `web_services/obtenerVideojuegoPorId.php?id=${id}`
    );
  }
}
