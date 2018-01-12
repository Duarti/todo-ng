import {Observable} from 'rxjs/Observable';

export interface Api {

  get(...params): Observable<Object[]>;

  getOne(...params): Object;

  post(object: Object): Object;

  put(object: Object): Object;

  delete(object: Object): Object;
}
