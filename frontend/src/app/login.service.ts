import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from './administrateur';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  public adminloginservice(admin:Administrateur):Observable<any>
  {
       const httpOptions= new HttpHeaders({
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:8090',
       'Access-Control-Allow-Methods':'POST'
       })
        return this._http.post<any>("http://localhost:8090/login",admin,{headers:httpOptions});
  }
}
