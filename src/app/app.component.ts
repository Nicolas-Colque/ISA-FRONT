import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './services/consulta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConsultaService]
})
export class AppComponent implements OnInit {
  title = 'ManageProjectWithModules';
  public estado: Number;

  constructor(private ConsultaService: ConsultaService, private router: Router){
    this.estado = 1;
  }
  
  ngOnInit(): void{
    this.RecargarNav();
  }

  RecargarNav(){
    
  }

  AbrirBarra(){
    if(this.estado == 0){
      this.estado = 1;
    }
    else{
      this.estado = 0;
    }
  }

  CerrarBarra(){
    this.estado = 1;
  }

  Desconectarse(){
    this.ConsultaService.DeleteToken();
    this.router.navigate(['']);
  }
  
  VerificarEstado(){
    let token = this.ConsultaService.getToken();
    if(token != ""){
      return true;
    }
    else{
      return false;
    }
  }

}
