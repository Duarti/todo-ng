import {Injectable} from '@angular/core';
import {Api} from '../interfaces/api';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../configs/ApiConfig';
import {Usuario} from '../models/usuario';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService implements Api {

  constructor(private http: HttpClient) {
  }


  get(...params): Observable<Object[]> {
    return null;
  }

  getOne(...params): Object {
    return null;
  }

  post(object: Object): Object {
    return null;
  }

  put(object: Object): Object {
    return null;
  }

  delete(object: Object): Object {
    return null;
  }

  login(usuario: string, senha: string): Observable {
    return this.http.get(API_URL + '/usuarios/login', {
      headers: {
        method: 'POST'
      }
    }).subscribe(res => {
      res.json();
    });
  }
}
