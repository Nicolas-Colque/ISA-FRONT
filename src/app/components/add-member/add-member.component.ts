import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ConsultaService } from 'src/app/services/consulta.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
  providers: [ConsultaService]
})
export class AddMemberComponent implements OnInit {

  form: FormGroup;
  private id_proyecto: any;
  public roles: Array<any>;

  constructor(private ConsultaService: ConsultaService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.roles = [];
    this.form = this.fb.group({
      usuario: this.fb.control(''),
      rol: this.fb.control('')
    })
  }

  ngOnInit(): void {
    let proyecto: any;
    this.route.params.subscribe((params: Params) => {
      proyecto = {
        token: this.ConsultaService.getToken(),
        id_proyecto: params.id
      }
      this.id_proyecto = params.id;
    });
    this.ConsultaService.ObtenerRoles().subscribe(
      response => {
        this.roles = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  AgregarMiembro(){
    let miembro = {
      token: this.ConsultaService.getToken(),
      id_rol: this.form.value.rol,
      id_proyecto: this.id_proyecto,
      username: this.form.value.usuario
    }
    this.ConsultaService.AgregarMiembro(miembro).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/home"]);
      },
      error => {
        console.log(error);
      }
    )
  }

}
