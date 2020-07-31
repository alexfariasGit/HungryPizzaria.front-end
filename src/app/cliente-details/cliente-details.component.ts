import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {  
  id = Number(this.actRoute.snapshot.params['id']);
  Cliente: any = {};
    
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {    

    if(this.id != 0)
    {      
      this.restApi.getCliente(this.id).subscribe((data: {}) => {
        if(data['code'] == 200)
        {
          this.Cliente = data['result']; 
        }
      })
    }
  }

  SaveCliente() {
      this.restApi.SaveCliente(this.Cliente).subscribe(data => {
        this.router.navigate(['/cliente-list'])
      })    
  }

  alterarIncluirCliente() {    
    if(this.id !== 0)
    {
      if(window.confirm('Você tem certeza que deseja alterar a Classificação?')){
        this.SaveCliente();
      }
    }
    else
    {
      this.SaveCliente();
    }
  }

}