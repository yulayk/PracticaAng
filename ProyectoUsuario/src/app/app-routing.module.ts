import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioEdicionComponent } from './usuario-edicion/usuario-edicion.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component'; 
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'Login', component:LoginComponent},
  {path:'Home', component:HomeComponent},
  {path:'UsuarioListado', component:UsuarioListadoComponent},
  {path:'UsuarioEdicion/:id', component:UsuarioEdicionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
