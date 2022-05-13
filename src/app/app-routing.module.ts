import { ChamadoUpdateComponent } from './components/chamados/chamado-update/chamado-update.component';
import { ChamadoListComponent } from './components/chamados/chamado-list/chamado-list.component';
import {  TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import {  TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ChamadoCreateComponent } from './components/chamados/chamado-create/chamado-create.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},

  {path: '', component: NavComponent, canActivate:[AuthGuard] ,children:[
    {path: 'home', component: HomeComponent},
    {path:'tecnicos', component: TecnicoListComponent},
    {path:'tecnicos/create', component: TecnicoCreateComponent},
    {path:'tecnicos/update/:id', component: TecnicoUpdateComponent},
    {path:'tecnicos/delete/:id', component: TecnicoDeleteComponent},

    {path: 'home', component: HomeComponent},
    {path:'clientes', component: ClienteListComponent},
    {path:'clientes/create', component: ClienteCreateComponent},
    {path:'clientes/update/:id', component: ClienteUpdateComponent},
    {path:'clientes/delete/:id', component: ClienteDeleteComponent},

    {path: 'chamados', component: ChamadoListComponent},
    {path: 'chamados/create', component: ChamadoCreateComponent},
    {path: 'chamados/update/:id', component: ChamadoUpdateComponent},


  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
