import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
      },
      {
        path: 'home', title: 'Home', component: ListaProductosComponent, children: [
          {
            path: 'alta', title: 'Añadir producto', component: AltaProductoComponent
          },
          {
            path: 'modificar', title: 'Modificar producto', component: ModificarProductoComponent
          },
          {
            path: 'eliminar', title: 'Eliminar producto', component: EliminarProductoComponent
          }
        ]
      }
];
