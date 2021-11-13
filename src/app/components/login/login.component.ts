import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConsultaService]
})
export class LoginComponent implements OnInit {

  public usuario: any;

  constructor(private ConsultaService: ConsultaService, private _http: HttpClient, private router: Router) { 
    this.usuario = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  IniciarSesion(){
    this.ConsultaService.LoginUsuario(this.usuario).subscribe(data => {
      if(data.message == "Login correcto!"){
        this.ConsultaService.setToken(data.token);
        this.router.navigate(['/home']);
        console.log(data)
      }
    });
  }

}
