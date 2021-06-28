//Modulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaUsuariosComponent } from './dashboard/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';

const routes: Routes = [
  {path:'', redirectTo: 'layout', pathMatch:'full'},
  {path:'layout', component: LayoutComponent},
  {path:'dashboard', component: DashboardComponent, children: [
    {path:'', component: ListaUsuariosComponent},
    {path: 'usuario/:id', component: UsuarioComponent}

  ]},
  {path:'**',redirectTo: 'layout', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
