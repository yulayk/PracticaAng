import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  listaUsuarios: Array<Usuario> = [];
  private ApiServicio = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getUsuarios():Array<Usuario>{
    //var mostrar;
    //this.http.get<any>(this.ApiServicio).subscribe(
     // data => {
     //   mostrar = JSON.parse(data['data']); 
//      }
 //   );
    //var mostrar = JSON.parse(result)
   // alert(mostrar);
    //this.http.get<any>('/api/users').subscribe(data => {
    //  alert()
    //  this.listaUsuarios = JSON.parse(data['data']); 
    //  localStorage.setItem("DatosUsuarios", JSON.stringify(this.listaUsuarios));
    //});
    return this.listaUsuarios;
  }

  eliminarUsuario(id:any):Boolean
  {
    return true;
  }
}
