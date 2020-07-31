import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pedidos-details',
  templateUrl: './pedidos-details.component.html',
  styleUrls: ['./pedidos-details.component.css']
})
export class PedidosDetailsComponent implements OnInit {  
  id = Number(this.actRoute.snapshot.params['id']);
  Pedidos: any = {};
    
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {    

    if(this.id != 0)
    {      
      this.restApi.getPedidos(this.id).subscribe((data: {}) => {
        if(data['code'] == 200)
        {
          this.Pedidos = data['result']; 
        }
      })
    }
  }

  SavePedidos() {
      this.restApi.SavePedidos(this.Pedidos).subscribe(data => {
        this.router.navigate(['/pedidos-list'])
      })    
  }

  alterarIncluirPedidos() {    
    if(this.id !== 0)
    {
      if(window.confirm('Você tem certeza que deseja alterar a Classificação?')){
        this.SavePedidos();
      }
    }
    else
    {
      this.SavePedidos();
    }
  }

}