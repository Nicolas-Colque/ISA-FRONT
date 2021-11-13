import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [ConsultaService]
})
export class HistoryComponent implements OnInit {

  public historial: Array<any>;

  constructor(private ConsultaService: ConsultaService, private router: Router, private route: ActivatedRoute) { 
    this.historial = [];
  }

  ngOnInit(): void {
    let proyecto: any;
    this.route.params.subscribe((params: Params) => {
      proyecto = {
        token: this.ConsultaService.getToken(),
        id_proyecto: params.id
      }
    });

    this.ConsultaService.ObtenerHistorial(proyecto).subscribe(
      response => {
        this.historial = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
