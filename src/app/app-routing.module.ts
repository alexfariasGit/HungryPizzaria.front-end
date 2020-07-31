import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component'
import { PizzaSaboresListComponent } from './pizzasabores-list/pizzasabores-list.component';
import { PizzaSaboresDetailsComponent } from './pizzasabores-details/pizzasabores-details.component'
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './pedidos-details/pedidos-details.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'cliente-list', component: ClienteListComponent},
  { path: 'cliente-details/:id', component: ClienteDetailsComponent},
  { path: 'pizzasabores-list', component: PizzaSaboresListComponent},
  { path: 'pizzasabores-details/:id', component: PizzaSaboresDetailsComponent},
  { path: 'pedidos-list', component: PedidosListComponent},
  { path: 'pedidos-details/:id', component: PedidosDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }