import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import {ReqresService } from '../servicios/reqres.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-usuario-edicion',
  templateUrl: './usuario-edicion.component.html',
  styleUrls: ['./usuario-edicion.component.css']
})
export class UsuarioEdicionComponent implements OnInit {
  titulo:string;
  listaUsuarios: Array<Usuario> = []; 
  usuarios:any;
  constructor(private servicioReqres:ReqresService,private router: Router) { 
this.titulo = "Formulario de nuevo usuario";

  }

  ngOnInit(): void {
  }
  onSubmit(f:any){
    alert("entra");
    this.usuarios =this.servicioReqres.getUsuarios();
    //this.listaUsuarios = this.servicioReqres.getUsuarios();
    if(this.listaUsuarios.find(x=> x.email == f.email) == null)
    {
      let usuario = new Usuario();
      usuario.id = f.id;
      usuario.email = f.email;
      usuario.password = f.password;
      usuario.first_name = f.nombre;
      usuario.last_name = f.apellido;
      usuario.avatar = f.avatar;
      //this.servicioReqres.crearUsuario(usuario);
      this.router.navigate(["/UsuariosListado"]);

    }
    else
    {
      alert("El usuario ya existe, pruebe con otra cuenta de correo")
    }
  
}
}
