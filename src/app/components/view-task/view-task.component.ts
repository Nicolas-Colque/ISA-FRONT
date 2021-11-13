import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  public tareas: Array<any>;

  constructor(private ConsultaService: ConsultaService, private router: Router, private route: ActivatedRoute) {
    this.tareas = [];
  }

  ngOnInit(): void {
    let proyecto: any;
    this.route.params.subscribe((params: Params) => {
      proyecto = {
        token: this.ConsultaService.getToken(),
        id_proyecto: params.id
      }
    });

    this.ConsultaService.ObtenerTareas(proyecto).subscribe(
      response => {
        this.tareas = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
