import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='https://gorest.co.in/public-api/users';

  //Este token es de la pagina de goRest
  token='9ab421eab276107c2ec320f9048c52b500f9a3e4d45b06c2b4572ed4d673392c';
  constructor(private http:HttpClient) { }
  getUsuarios():Observable<any>{
    return this.http.get<any>(this.url + '?access-token=xxx' + this.token);
  }
  getUsuario(id:number):Observable<any>{
    return this.http.get<any>(this.url + '/' + id + '?access-token=xxx' + this.token);
  }
}
