import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreateProyectComponent } from './components/create-proyect/create-proyect.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { NavProjectComponent } from './components/nav-project/nav-project.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { HistoryComponent } from './components/history/history.component';
import { ViewMembersComponent } from './components/view-members/view-members.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CreateProyectComponent,
    CreateTaskComponent,
    ProjectsComponent,
    AddMemberComponent,
    NavProjectComponent,
    ViewTaskComponent,
    HistoryComponent,
    ViewMembersComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
