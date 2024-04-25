import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../_servicios/producto.service';
import { Producto } from '../_modelo/Producto';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  @Output() emitter = new EventEmitter<void>();
  
    idProducto: number = 0;
    nombreProducto: string = '';
    precioUnitario: number = 0;
    unidadesStock: number = 0;
    discontinuidad: number = 0;

    constructor(private servicio: ProductoService){}

    anyadirProducto(){
      const producto: Producto = {
        idProducto: this.idProducto, 
        nombreProducto: this.nombreProducto, 
        precioUnitario: this.precioUnitario, 
        unidadesStock: this.unidadesStock, 
        discontinuidad: this.discontinuidad
      };

      this.servicio.altaProducto(producto).subscribe(() => {
        console.log('Producto agregado con éxito.');
        this.idProducto = 0; 
        this.nombreProducto = '';
        this.precioUnitario = 0
        this.unidadesStock = 0;
        this.discontinuidad = 0;

        this.emitter.emit();
      });
    }
}