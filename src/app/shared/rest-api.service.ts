import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cliente } from '../shared/cliente';
import { PizzaSabores } from '../shared/pizzasabores';
import { Pedidos } from '../shared/pedidos';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:2998/api';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  // HttpClient API get() method => Fetch employees list
  getClientes(): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiURL + '/Cliente/GetAllCliente')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiURL + '/Cliente/GetByIDCliente?id=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  SaveCliente(Cliente): Observable<Cliente> {    
    return this.http.put<Cliente>(this.apiURL + '/Cliente/Save', JSON.stringify(Cliente), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
  // HttpClient API delete() method => Delete employee
  deleteCliente(id){
    return this.http.delete<Cliente>(this.apiURL + '/Cliente/Delete?id=' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  // HttpClient API get() method => Fetch employees list
  getListPizzaSabores(): Observable<PizzaSabores> {
    return this.http.get<PizzaSabores>(this.apiURL + '/PizzaSabores/GetAllPizzaSabores')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getPizzaSabores(id): Observable<PizzaSabores> {
    return this.http.get<PizzaSabores>(this.apiURL + '/PizzaSabores/GetByIDPizzaSabores?id=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  SavePizzaSabores(PizzaSabores): Observable<PizzaSabores> {    
    return this.http.put<PizzaSabores>(this.apiURL + '/PizzaSabores/Save', JSON.stringify(PizzaSabores), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
  // HttpClient API delete() method => Delete employee
  deletePizzaSabores(id){
    return this.http.delete<PizzaSabores>(this.apiURL + '/PizzaSabores/Delete?id=' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employees list
  getListPedidos(): Observable<Pedidos> {
    return this.http.get<Pedidos>(this.apiURL + '/pedidos/GetAllPedidos')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getPedidos(id): Observable<Pedidos> {
    return this.http.get<Pedidos>(this.apiURL + '/pedidos/GetByIDPedidos?id=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  SavePedidos(Pedidos): Observable<Pedidos> {    
    return this.http.put<Pedidos>(this.apiURL + '/pedidos/Save', JSON.stringify(Pedidos), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
  // HttpClient API delete() method => Delete employee
  deletePedidos(id){
    return this.http.delete<Pedidos>(this.apiURL + '/pedidos/Delete?id=' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
   
  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
