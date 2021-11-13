import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [ConsultaService]
})
export class CreateTaskComponent implements OnInit {

  form: FormGroup;
  public usuarios: Array<any>;
  public check: Array<any>;
  public estados: Array<any>;
  private id_proyecto: any;

  constructor(private ConsultaService: ConsultaService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
      nombre_tarea: this.fb.control(''),
      descripcion_tarea: this.fb.control(''),
      id_estado: this.fb.control('')
    });
    this.form.addControl('nombre_tarea', new FormControl(''));
    this.usuarios = [
    ];
    this.check = [];
    this.estados = [];
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

    this.ConsultaService.ObtenerMiembrosProyecto(proyecto).subscribe(
      response => {
        this.usuarios = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )

    this.ConsultaService.ObtenerEstados().subscribe(
      response => {
        this.estados = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.form.value);
  }

  CrearTarea(){
    let tarea = {
      id_proyecto: this.id_proyecto,
      token: this.ConsultaService.getToken(),
      name: this.form.value.nombre_tarea,
      description: this.form.value.descripcion_tarea,
      id_estado: this.form.value.id_estado,
      responsables: this.form.value.checkArray
    }
    this.ConsultaService.CrearTarea(tarea).subscribe(
      async response => {
        console.log(response);
        console.log(this.id_proyecto);
        this.router.navigate(["/home"]);
      },
      error => {
        console.log(error);
      }
    );
    console.log(tarea);
  }
}
