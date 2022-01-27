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
    alert("Los campos email y el password son obligatoriso.")
  }
  else
  {
  //llamada al servicio
  if(this.servicioReq.getUsuarios().find(x=> x.email == f.email && x.password == f.password) != null)
  {

  }
  this.router.navigate(["/Home"]);

}


}

  ngOnInit(): void {
  }





}
