import {Injectable} from '@angular/core';
import {Api} from '../interfaces/api';
import {Nota} from '../models/nota';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../configs/ApiConfig';
import {AuthService} from './auth.service';

@Injectable()
export class NotaService implements Api {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  get(pagina, filtro, busca): Observable<any> {
    return this.http.get(API_URL + '/notas', {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      },
      params: {
        pagina: pagina,
        filtro: filtro,
        q: busca
      },
      observe: 'response'
    });
  }

  getOne(): Observable<any> {
    return null;
  }

  post(nota: Nota): Observable<any> {
    return this.http.post(API_URL + '/notas', nota, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    });
  }

  put(nota: Nota): Observable<any> {
    return null;
  }

  delete(nota: Nota): Observable<any> {
    return this.http.delete(API_URL + '/notas/' + nota.id, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      },
      observe: 'response'
    });
  }

  patch(nota: Nota): Observable<any> {
    return this.http.patch(API_URL + '/notas/' + nota.id, nota, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    });
  }
}
