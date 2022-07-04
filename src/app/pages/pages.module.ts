import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloEditarComponent } from './articulo/articulo-editar/articulo-editar.component';
import { ArticuloListarComponent } from './articulo/articulo-listar/articulo-listar.component';
import { ClienteEditarComponent } from './cliente/cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { PedidosEditarComponent } from './pedidos/pedidos-editar/pedidos-editar.component';
import { PedidosListarComponent } from './pedidos/pedidos-listar/pedidos-listar.component';
import { VentasEditarComponent } from './ventas/ventas-editar/ventas-editar.component';
import { VentasListarComponent } from './ventas/ventas-listar/ventas-listar.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticuloEditarComponent,
    ArticuloListarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    PedidosEditarComponent,
    PedidosListarComponent,
    VentasEditarComponent,
    VentasListarComponent,
    PagesComponent,
  ],
  exports:[
    ArticuloEditarComponent,
    ArticuloListarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    PedidosEditarComponent,
    PedidosListarComponent,
    VentasEditarComponent,
    VentasListarComponent],
  imports: [CommonModule, RouterModule],
})
export class PagesModule {}
