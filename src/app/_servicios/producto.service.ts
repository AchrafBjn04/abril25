import { Injectable } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { entorno } from '../_entorno/entorno';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = `${entorno.HOST}/productos`;

  constructor(private http: HttpClient) { }

  obtenerTodos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  altaProducto(p: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, p);
  }

  bajaProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  modificarProducto(p: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url, p);
  }
}
