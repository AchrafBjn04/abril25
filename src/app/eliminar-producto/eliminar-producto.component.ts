import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../_servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {
  idProducto: number = 0;

  constructor(private servicio: ProductoService){}

  eliminarProducto(id: number){
    this.servicio.bajaProducto(id).subscribe(() => {
      console.log('Producto eliminado con éxito.');
    });
  }
}
