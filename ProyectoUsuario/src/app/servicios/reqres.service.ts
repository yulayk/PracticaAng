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
  listaUsuarios: Array<Usuario> = [];
  usuarios: any;
  result: any;
  resultado:any;
  constructor(private http: HttpClient) {
    
   }

  getUsuarios(){
        let url = `${CONFIG.HostReqres}${CONFIG.URL.GET_USUARIOS}`;

    this.http.get(url).subscribe((data:any) => {
      return this.listaUsuarios = data.data;
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

  login(email:string, password:string){

    let url = `${CONFIG.HostReqres}${CONFIG.URL.LOGIN}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    //const headers = { 'content-type': 'application/json'}  
    const body= JSON.parse('{"email":"'+email+'","password":"'+password +'"}');
 

    
    console.log(body);
    this.http.post(url, body, httpOptions).subscribe((data:any) => {
      this.result = data.token;
      this.resultado = true;
      alert(this.result);
      console.log(this.result);
     
    });
    return this.resultado;
  }

  registroUsuario(email:string, password:string) 
   {
    let url = `${CONFIG.HostReqres}${CONFIG.URL.REGISTER_USER}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    //const headers = { 'content-type': 'application/json'}  
    const body= JSON.parse('{"email":"'+email+'","password":"'+password +'"}');
 

    
    console.log(body);
    this.http.post(url, body, httpOptions).subscribe((data:any) => {
      this.result = data.token;
      alert(this.result);
      console.log(this.result);
    });
    return this.result;
   }
}
