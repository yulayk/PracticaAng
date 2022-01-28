import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../clases/usuario';
import {ReqresService } from '../servicios/reqres.service'
import {ActivatedRoute, Router} from '@angular/router'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-edicion',
  templateUrl: './usuario-edicion.component.html',
  styleUrls: ['./usuario-edicion.component.css']
})
export class UsuarioEdicionComponent  {
  titulo:string;
  listaUsuarios: Array<Usuario> = []; 
  usuarios:any;
  mostrar:boolean;
  usuario:Usuario;
  usuarioEdicion:Usuario = new Usuario();
  pId:number;
  parId:any;

  constructor(private servicioReqres:ReqresService,route: ActivatedRoute, private router: Router) { 
    this.titulo = "";
    this.pId = 0;
    this.mostrar = false;
    
    this.parId = route.snapshot.paramMap.get('id');

    this.usuario = new Usuario();
  }

  ngOnDestroy() {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    
    if (this.parId != "") {
      this.titulo = "Formulario de edición de usuario";
      this.mostrar = true;
      this.pId = parseInt(this.parId);
      this.usuario = this.servicioReqres.getUsuarios().find(x=> x.id == this.pId)!;
    }
    else
    {
      this.usuario.id = 0;
      this.titulo = "Formulario de nuevo usuario";
    }
  
  }

  onSubmit(f:any){
  
    let usuario = new Usuario();
    usuario.id = f.id;
    usuario.email = f.email;
    usuario.password = f.password;
    usuario.first_name = f.nombre;
    usuario.last_name = f.apellido;
    usuario.avatar = f.avatar;
  
    //En el caso de que sea cero procederá de un usuario nuevo
    if(f.id == 0)
    {
      //ADD
      let result = this.servicioReqres.crearUsuario(usuario);
      var hh = JSON.stringify(result);
      alert(hh);
    }
    else
    {
      //UPDATE
      //let result = this.servicioReqres.actualizarUsuario(usuario);
      //var hh = JSON.stringify(result);
      //alert(hh);
    }
  }
}
