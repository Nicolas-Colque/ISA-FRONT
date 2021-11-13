import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ConsultaService]
})
export class RegisterComponent implements OnInit {

  public usuario: any;
  public passwordr: string;
  public formulario: boolean | undefined;

  constructor(private ConsultaService: ConsultaService, private router: Router) { 
    this.usuario = {
      username : '',
      email : '',
      password : ""
    };
    this.passwordr = '';
  }

  ngOnInit(): void {
    
  }

  RegistrarUsuario(){
    console.log("enviando");
    
    var respuesta = this.ConsultaService.RegistrarUsuario(this.usuario);
    respuesta.subscribe(
      response => {
        console.log(response);
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
      }
    )
    
  }
}
