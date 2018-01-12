import {Injectable} from '@angular/core';
import {Api} from '../interfaces/api';
import {Nota} from '../models/nota';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../configs/ApiConfig';

@Injectable()
export class NotaService implements Api {

  constructor(private http: HttpClient) {
  }

  get(...params): Observable<Nota []> {
    return this.http.get(API_URL + '/notas', {
      headers: {
        'Authorization': 'Bearer ' + '525aea4f99f9ca2bc4eb840c7eae0f55e77a2abca2282d9c12d84e4a95dd0d55'
      }
    });
  }

  getOne(): Nota {
    return null;
  }

  post(nota: Nota): Nota {
    return nota;
  }

  put(nota: Nota) {
    return nota;
  }

  delete(nota: Nota) {
    return nota;
  }
}
