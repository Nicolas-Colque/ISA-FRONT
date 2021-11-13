import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css'],
  providers: [ConsultaService]
})
export class ViewMembersComponent implements OnInit {

  public miembros: Array<any>;

  constructor(private ConsultaService: ConsultaService, private router: Router, private route: ActivatedRoute) { 
    this.miembros = [];
  }

  ngOnInit(): void {
    let proyecto: any;
    this.route.params.subscribe((params: Params) => {
      proyecto = {
        token: this.ConsultaService.getToken(),
        id_proyecto: params.id
      }
    });

    this.ConsultaService.ObtenerMiembrosProyecto(proyecto).subscribe(
      response => {
        this.miembros = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
