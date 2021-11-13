import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-nav-project',
  templateUrl: './nav-project.component.html',
  styleUrls: ['./nav-project.component.css'],
  providers: [ConsultaService]
})
export class NavProjectComponent implements OnInit {

  public proyectos: Array<any>;
  public id_proyecto: string;
  public project_name: any;
  public rol_editor: any;

  constructor(private cvRef: ViewContainerRef, private resolver: ComponentFactoryResolver, private router: Router, private route: ActivatedRoute, private ConsultaService: ConsultaService) { 
    this.proyectos = [];
    this.id_proyecto = "";
  }
  
  async CreateTask(){
    this.cvRef.clear();
    const { CreateTaskComponent } = await import('../create-task/create-task.component');
    this.cvRef.createComponent(this.resolver.resolveComponentFactory(CreateTaskComponent));
  }
  async ViewTask(){
    this.cvRef.clear();
    const { ViewTaskComponent } = await import('../view-task/view-task.component');
    this.cvRef.createComponent(this.resolver.resolveComponentFactory(ViewTaskComponent));
  }
  async History(){
    this.cvRef.clear();
    const { HistoryComponent } = await import('../history/history.component');
    this.cvRef.createComponent(this.resolver.resolveComponentFactory(HistoryComponent));
  }
  async AddMember(){
    this.cvRef.clear();
    const { AddMemberComponent } = await import('../add-member/add-member.component');
    this.cvRef.createComponent(this.resolver.resolveComponentFactory(AddMemberComponent));
  }
  async ViewMembers(){
    this.cvRef.clear();
    const { ViewMembersComponent } = await import('../view-members/view-members.component');
    this.cvRef.createComponent(this.resolver.resolveComponentFactory(ViewMembersComponent));
  }
  ngOnInit(): void {
    console.log("adasdasd");
    this.route.params.subscribe((params: Params) => {
      this.id_proyecto = params.id;
    });
    this.ConsultaService.ObtenerMisProyectos().subscribe(
      response => {
        for(let proyecto in response){
          let elemento = response[proyecto];
          if(elemento.id_proyecto == this.id_proyecto){
            this.project_name = elemento.name;
          }
        }
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )

    let proyecto: any;
    this.route.params.subscribe((params: Params) => {
      proyecto = {
        token: this.ConsultaService.getToken(),
        id_proyecto: params.id
      } 
    }
    )
    this.ConsultaService.VerificarRolEditor(proyecto).subscribe(
      response => {
        console.log("rol:"+response.message);
        if(response.message == "true"){
          this.rol_editor = true;
        }
        else{
          this.rol_editor = false;
        }
      },
      error => {
        console.log(error);
      }
    )

  }
}
