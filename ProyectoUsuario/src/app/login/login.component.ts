import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../servicios/reqres.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this.servicioReq.getUsuarios()
    //llamada al servicio
   // if(this.servicioReq.getUsuarios().find(x=> x.email == f.email && x.password == f.password) != null)
    //{

    //}
    this.router.navigate(["/Home"]);

  }


}
registrar(f:any){
  if(f.email == "" || f.password == "")
  {
    alert("Los campos email y el password son obligatorios para poder registrarse.")
  }
  else
  {
    
  alert("Usuario registrado, por favor, introduzca el email y el password para acceder.")  
  }
  
}
  ngOnInit(): void {
  }





}
