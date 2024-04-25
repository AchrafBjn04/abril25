import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductoService } from '../_servicios/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificar-producto.component.html',
  styleUrl: './modificar-producto.component.css'
})
export class ModificarProductoComponent {

  @Output() emitter = new EventEmitter<void>();
  
  idProducto: number = 0;
  nombreProducto: string = '';
  precioUnitario: number = 0;
  unidadesStock: number = 0;
  discontinuidad: number = 0;

  constructor(private servicio: ProductoService){}

  modificarProducto(){
    const producto: Producto = {
      idProducto: this.idProducto, 
      nombreProducto: this.nombreProducto, 
      precioUnitario: this.precioUnitario, 
      unidadesStock: this.unidadesStock, 
      discontinuidad: this.discontinuidad
    };

    this.servicio.modificarProducto(producto).subscribe(() => {
      console.log('Producto modificado con éxito');
      this.idProducto = 0; 
      this.nombreProducto = '';
      this.precioUnitario = 0
      this.unidadesStock = 0;
      this.discontinuidad = 0;

      this.emitter.emit();
    });
  }
}
