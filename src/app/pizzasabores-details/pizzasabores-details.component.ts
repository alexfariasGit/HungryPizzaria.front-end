import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pizzasabores-details',
  templateUrl: './pizzasabores-details.component.html',
  styleUrls: ['./pizzasabores-details.component.css']
})
export class PizzaSaboresDetailsComponent implements OnInit {  
  id = Number(this.actRoute.snapshot.params['id']);
  PizzaSabores: any = {};
    
  ddlCombo = [
    {name: "SIM", value: true},
    {name: "Não", value: false}];    

    
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {    

    if(this.id != 0)
    {      
      debugger
      this.restApi.getPizzaSabores(this.id).subscribe((data: {}) => {
        if(data['code'] == 200)
        {
          this.PizzaSabores = data['result']; 
        }
      })
    }
  }

  SavePizzaSaboress() {
      this.restApi.SavePizzaSabores(this.PizzaSabores).subscribe(data => {
        this.router.navigate(['/PizzaSaboress-list'])
      })    
  }

  alterarIncluirPizzaSaboress() {    
    if(this.id !== 0)
    {
      if(window.confirm('Você tem certeza que deseja alterar a Classificação?')){
        this.SavePizzaSaboress();
      }
    }
    else
    {
      this.SavePizzaSaboress();
    }
  }

}