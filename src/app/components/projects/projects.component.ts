import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ConsultaService]
})
export class ProjectsComponent implements OnInit {

  public proyectos_publicos: any;

  constructor(private ConsultaService: ConsultaService) { 
    this.proyectos_publicos = [];
  }

  ngOnInit(): void {
    this.ConsultaService.ObtenerProyectosPublicos().subscribe(
      response => {
        console.log(response);
        this.proyectos_publicos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
