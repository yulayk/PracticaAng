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

  eliminarUsuario(id:any):Boolean
  {
    return true;
  }
}
