import {Observable} from 'rxjs/Observable';

export interface Api {

  get(...params): Observable<any>;

  getOne(...params): Observable<any>;

  post(object: Object): Observable<any>;

  put(object: Object): Observable<any>;

  delete(object: Object): Observable<any>;

  patch(object: Object): Observable<any>;
}
