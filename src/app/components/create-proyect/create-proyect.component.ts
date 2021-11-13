import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proyect',
  templateUrl: './create-proyect.component.html',
  styleUrls: ['./create-proyect.component.css'],
  providers: [ConsultaService]
})
export class CreateProyectComponent implements OnInit {

  public proyecto: any;
  public combo: any;

  constructor(private ConsultaService: ConsultaService, private router: Router) { 
    this.proyecto = {
      name: '',
      description: '',
      visibility: '',
      token: ''
    }
  }

  ngOnInit(): void {
    this.ConsultaService.VerificarToken(this.ConsultaService.getToken()).subscribe(
      response => {
        if(response.message == "false"){
          this.router.navigate(['/']);
        }
      },
      error => {
        this.router.navigate(['/']);
      }
    );
  }

  CrearProyecto(){
    var respuesta = this.ConsultaService.CrearProyecto(this.proyecto);
    respuesta.subscribe(
      response => {
        console.log(response);
        this.router.navigate(['my-projects']);
      },
      error => {
        console.log(error);
      }
    )
  }
}
