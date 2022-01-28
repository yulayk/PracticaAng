import { Component, OnInit, ViewChild } from '@angular/core';
import { ReqresService } from '../servicios/reqres.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Usuario } from '../clases/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ReqresService]
})
export class LoginComponent implements OnInit {
  //public usuarios:Usuario[] = []
  constructor(private servicioReq:ReqresService,private router: Router) { 


  }

login(f:any)
{
  if(f.email == "" || f.password == "")
  {
    alert("Los campos email y el password son obligatorios.")
  }
  else
  {
    //this.servicioReq.loginUsuario(String(f.email), String(f.password));
    //si devuelve token accede a la home, en caso contrario se le mostraría un mensaje
    this.router.navigate(["/Home"]);

  }
}
registrar(f:any){
  if(f.email == "" || f.password == "")
  { alert("Los campos email y el password son obligatorios para poder registrarse.") }
  else
  {
    //let result = this.servicioReq.registroUsuario(String(f.email), String(f.password));
    //let mensaje = JSON.stringify(result);
    //alert(mensaje);
  }
}

ngOnInit(): void {
  
  }





}
