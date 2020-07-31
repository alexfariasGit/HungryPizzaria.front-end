import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { PizzaSaboresListComponent } from './pizzasabores-list/pizzasabores-list.component';
import { PizzaSaboresDetailsComponent } from './pizzasabores-details/pizzasabores-details.component';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './pedidos-details/pedidos-details.component';

@NgModule({
  declarations: [
    AppComponent,   
    ClienteListComponent,
    ClienteDetailsComponent,
    PizzaSaboresListComponent,
    PizzaSaboresDetailsComponent,
    PedidosListComponent,
    PedidosDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
