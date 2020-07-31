import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  Pedidoss: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.CarregaPedidoss();
  }

  // Get employees list
  CarregaPedidoss() {
    return this.restApi.getListPedidos().subscribe((data: {} ) => {      
      if(data['code'] == 200)
      {
        this.Pedidoss = data['result'];  
      }
    })
  }

  // Delete employee
  deletePedidos(id) {
    if (window.confirm('Você tem certeza que deseja apagar?')){
      this.restApi.deletePedidos(id).subscribe(data => {
        this.CarregaPedidoss();
      })
    }
  }  

}
