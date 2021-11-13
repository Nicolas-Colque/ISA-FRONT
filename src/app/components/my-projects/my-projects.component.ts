import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
  providers: [ConsultaService]
})
export class MyProjectsComponent implements OnInit {

  public proyectos: any;
  public editor: boolean;

  constructor(private ConsultaService: ConsultaService, private router: Router, private route: ActivatedRoute) { 
    this.proyectos = [];
    this.editor = false;
  }

  ngOnInit(): void {
    let token = this.ConsultaService.getToken();
    console.log("recarga");
    if(token != ""){
      this.ConsultaService.ObtenerMisProyectos().subscribe(
        response => {
          console.log(response);
          for(let proyecto in response){
            let elemento = response[proyecto];
            let x = {
              id_proyecto: elemento.id_proyecto,
              name: elemento.name,
              description: elemento.description
            }
            this.proyectos.push(x);
          }
        },
        error => {
          console.log(error);
        }
      )

    }
  }
}

