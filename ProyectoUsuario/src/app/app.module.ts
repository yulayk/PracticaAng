import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { UsuarioEdicionComponent } from './usuario-edicion/usuario-edicion.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioListadoComponent,
    UsuarioEdicionComponent,
    LoginComponent,
    HomeComponent,
    NavegacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
