import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ArticuloListarComponent } from './articulo/articulo-listar/articulo-listar.component';
import { ArticuloEditarComponent } from './articulo/articulo-editar/articulo-editar.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { ClienteEditarComponent } from './cliente/cliente-editar/cliente-editar.component';
import { PedidosEditarComponent } from './pedidos/pedidos-editar/pedidos-editar.component';
import { PedidosListarComponent } from './pedidos/pedidos-listar/pedidos-listar.component';
import { VentasEditarComponent } from './ventas/ventas-editar/ventas-editar.component';
import { VentasListarComponent } from './ventas/ventas-listar/ventas-listar.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'articulolistar', component: ArticuloListarComponent },
      { path: 'articuloeditar', component: ArticuloEditarComponent },
      { path: 'clientelistar', component: ClienteListarComponent },
      { path: 'clienteeditar', component: ClienteEditarComponent },
      { path: 'pedidoeditar', component: PedidosEditarComponent },
      { path: 'pedidolistar', component: PedidosListarComponent },
      { path: 'ventaeditar', component: VentasEditarComponent },
      { path: 'ventalistar', component: VentasListarComponent },
      { path: '', redirectTo: 'articulolistar', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
