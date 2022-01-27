import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import {ReqresService } from '../servicios/reqres.service'

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {
  usuarios:Array<Usuario> = [];
  
  constructor( private servicioReqres:ReqresService) {
    this.usuarios = servicioReqres.getUsuarios();

   }

   eliminarUsuario(id:any){
    console.log(id);
    //let producto = this.productService.getProducto(id);
   if(this.servicioReqres.eliminarUsuario(id))
   {
      alert("Usuario eliminado correctamente");
   }



  }

  ngOnInit(): void {
  }

}
