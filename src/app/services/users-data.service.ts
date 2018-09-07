import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
/*import {Observable} from 'rxjs/Observable';*/
import { RegUser } from '../shared/regdataexport';

  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  @Injectable()
  export class UsersDataService {
    constructor(private httpClient: HttpClient) { }

    /*public regdataexport(user: RegUser): Observable<RegUser> {
      return this.httpClient.post<RegUser>(this.regdataexport + 'register', httpOptions);
    }*/
}
