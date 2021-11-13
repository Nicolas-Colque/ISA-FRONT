import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

@Injectable() 
export class ConsultaService{

    private direccionAPI: string;
    
    constructor(private _http:HttpClient, private cookies: CookieService){
        this.direccionAPI = 'http://'+environment.apiUrl;
    }
    RegistrarUsuario(usuario: any):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/register", usuario);
        return respuesta;
    }
    LoginUsuario(usuario: any):Observable<any>{
        var respuesta = this._http.post<any>(this.direccionAPI+"/login", usuario);
        return respuesta;
    }
    VerificarToken(token: string):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/jwt-token", {token: token});
        return respuesta;
    }
    CrearProyecto(proyecto: any):Observable<any>{
        proyecto.token = this.getToken();
        console.log(proyecto);
        let respuesta = this._http.post<any>(this.direccionAPI+"/create-project", proyecto)
        return respuesta;
    }
    ObtenerMisProyectos():Observable<any>{
        let token = { token: "" };
        token.token = this.getToken();
        let respuesta = this._http.post<any>(this.direccionAPI+"/get-proyectos-usuario", token);
        return respuesta;
    }
    ObtenerProyectosPublicos():Observable<any>{
        let respuesta = this._http.get<any>(this.direccionAPI+"/get-proyectos-publicos");
        return respuesta;
    }
    VerificarRolEditor(usuario: any):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/jwt-token-editor", usuario);
        return respuesta;
    }
    ObtenerMiembrosProyecto(proyecto: any):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/get-members-task", proyecto);
        return respuesta;
    }
    ObtenerEstados():Observable<any>{
        let respuesta = this._http.get<any>(this.direccionAPI+"/get-estados");
        return respuesta;
    }
    CrearTarea(tarea: any):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/set-tarea", tarea);
        return respuesta;
    }
    AgregarMiembro(miembro: any):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/add-member", miembro);
        return respuesta;
    }

    ObtenerRoles():Observable<any>{
        let respuesta = this._http.get<any>(this.direccionAPI+"/get-roles");
        return respuesta;
    }
    ObtenerTareas(proyecto: any):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/get-tareas", proyecto);
        return respuesta;
    }
    ObtenerHistorial(proyecto: any):Observable<any>{
        let respuesta = this._http.post<any>(this.direccionAPI+"/get-historial", proyecto);
        return respuesta;
    }
    setToken(token: string) {
        this.cookies.set("token", token);
    }
    getToken(){
        return this.cookies.get("token");
    }
    DeleteToken(){
        return this.cookies.delete("token");
    }
}