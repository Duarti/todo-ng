import {Injectable} from '@angular/core';
import {Api} from '../interfaces/api';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {API_URL} from '../configs/ApiConfig';
import {Tarefa} from '../models/tarefa';

@Injectable()
export class TarefaService implements Api {

  constructor(private http: HttpClient, private auth: AuthService) {
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

  delete(tarefa: Tarefa): Observable<any> {
    return this.http.delete(API_URL + '/subtarefas/' + tarefa.id, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      },
      observe: 'response'
    });
  }

  patch(tarefa: Tarefa): Observable<any> {
    return this.http.patch(API_URL + '/subtarefas/' + tarefa.id, tarefa, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    });
  }
}
