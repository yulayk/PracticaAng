import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { CONFIG } from '../config';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  public listaUsuarios: Array<Usuario> = [];
  public usuarios: any;
  constructor(private http: HttpClient) { }

  getUsuarios(){
        let url = `${CONFIG.HostReqres}${CONFIG.URL.GET_USUARIOS}`;

    this.http.get(url).subscribe((data:any) => {
      this.listaUsuarios = data.data;
      console.log(this.listaUsuarios);
    });
    return this.listaUsuarios;

  }

  crearUsuario(user:Usuario) {
    let url = `${CONFIG.HostReqres}${CONFIG.URL.SAVE_USER}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const headers = { 'content-type': 'application/json'}  
    const body= '{"name":"morpheus","job":"leader"}';
 
 //   const body='{"name":"'user.nombre'","job":"leader"}'://JSON.stringify(user);
    
    console.log(body);
    return this.http.post(url, body, httpOptions);
  }

  eliminarUsuario(id:any):Boolean
  {

    return true;
  }
  registroUsuario(email:string, password:string) 
   {
    let url = `${CONFIG.HostReqres}${CONFIG.URL.SAVE_USER}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const headers = { 'content-type': 'application/json'}  
    const body= '{"email":"'+email+'","password":"'+password +'"}';
 
 //   const body='{"name":"'user.nombre'","job":"leader"}'://JSON.stringify(user);
    
    console.log(body);
    return this.http.post(url, body, httpOptions);
   }
}
