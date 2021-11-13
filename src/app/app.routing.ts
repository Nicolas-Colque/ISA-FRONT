//Módules de router de angular
import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Componentes que van a ser una página

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from './components/home/home.component';
import { CreateProyectComponent } from "./components/create-proyect/create-proyect.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { NavProjectComponent } from "./components/nav-project/nav-project.component";
import { MyProjectsComponent } from "./components/my-projects/my-projects.component"; 
//Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},    
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'create-project', component: CreateProyectComponent},
    {path: 'my-projects', component: MyProjectsComponent},
    {path: ':id', component: NavProjectComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


