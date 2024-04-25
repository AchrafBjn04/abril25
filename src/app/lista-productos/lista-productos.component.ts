import { Component, EventEmitter, OnInit } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductoService } from '../_servicios/producto.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AltaProductoComponent } from '../alta-producto/alta-producto.component';
import { DeleteProductoComponent } from '../delete-producto/delete-producto.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, AltaProductoComponent, DeleteProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];
  idProductoSeleccionado: number = 0;

  constructor(private servicio: ProductoService){}

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos(){
    this.servicio.obtenerTodos()
    .subscribe(data => this.productos = data);
  }

  eliminarProducto(id: number){
    this.servicio.bajaProducto(id).subscribe(() => {
      console.log('Producto eliminado con éxito.');
      
      this.obtenerProductos();
    });
  }

  deleteProducto(id: number){
    this.idProductoSeleccionado = id;
  }
}