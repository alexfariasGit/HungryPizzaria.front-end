import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-pizzasabores-list',
  templateUrl: './pizzasabores-list.component.html',
  styleUrls: ['./pizzasabores-list.component.css']
})
export class PizzaSaboresListComponent implements OnInit {
  PizzaSaboress: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.CarregaPizzaSabores();
  }

  // Get employees list
  CarregaPizzaSabores() {
    return this.restApi.getListPizzaSabores().subscribe((data: {} ) => {      
      if(data['code'] == 200)
      {
        this.PizzaSaboress = data['result'];  
      }
    })
  }

  // Delete employee
  deleteCliente(id) {
    if (window.confirm('Você tem certeza que deseja apagar?')){
      this.restApi.deleteCliente(id).subscribe(data => {
        this.CarregaPizzaSabores();
      })
    }
  }  

}
