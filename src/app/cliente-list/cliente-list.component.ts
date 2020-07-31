import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  Clientes: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.CarregaClientes();
  }

  // Get employees list
  CarregaClientes() {
    return this.restApi.getClientes().subscribe((data: {} ) => {      
      if(data['code'] == 200)
      {
        this.Clientes = data['result'];  
      }
    })
  }

  // Delete employee
  deleteCliente(id) {
    if (window.confirm('Você tem certeza que deseja apagar?')){
      this.restApi.deleteCliente(id).subscribe(data => {
        this.CarregaClientes();
      })
    }
  }  

}
