import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListaUsuariosComponent } from './dashboard/lista-usuarios/lista-usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { TarjetaUsuarioComponent } from './dashboard/lista-usuarios/tarjeta-usuario/tarjeta-usuario.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListaUsuariosComponent,
    LayoutComponent,
    TarjetaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
