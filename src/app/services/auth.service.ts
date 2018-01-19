import {Injectable} from '@angular/core';
import {Api} from '../interfaces/api';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../configs/ApiConfig';
import {Usuario} from '../models/usuario';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService implements Api {
  usuario = new Usuario();

  constructor(private http: HttpClient) {
  }

  get(...params): Observable<any> {
    return null;
  }

  getOne(...params): Observable<any> {
    return null;
  }

  post(object: Object): Observable<any> {
    return null;
  }

  put(object: Object): Observable<any> {
    return null;
  }

  delete(object: Object): Observable<any> {
    return null;
  }

  patch(object: Object): Observable<any> {
    return null;
  }

  login(usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('method', 'POST');
    headers.append('Content-Type', 'application/json');
    return this.http.post(API_URL + '/usuarios/login', usuario, {
      headers: headers,
      observe: 'response'
    });
  }

  getToken(): string {
    // return '525aea4f99f9ca2bc4eb840c7eae0f55e77a2abca2282d9c12d84e4a95dd0d55';
    return this.usuario.getUserToken();
  }

  setToken(token: string) {
    this.usuario.setUserToken(token);
  }

}
