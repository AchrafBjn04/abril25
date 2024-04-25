import { Component, Input } from '@angular/core';
import { ProductoService } from '../_servicios/producto.service';

@Component({
  selector: 'app-delete-producto',
  standalone: true,
  imports: [],
  templateUrl: './delete-producto.component.html',
  styleUrl: './delete-producto.component.css'
})
export class DeleteProductoComponent {
  @Input() idProducto: number = 0;

  constructor(private servicio: ProductoService){}

  deleteProducto(){
      this.servicio.bajaProducto(this.idProducto).subscribe(() => {
        console.log('Producto eliminado con éxito.');
      });
  }
}
