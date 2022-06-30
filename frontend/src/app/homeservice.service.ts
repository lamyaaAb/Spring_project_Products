import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private _http:HttpClient) { }

  public getCategorie():Observable<any>
  {
    const httpOptions= new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8090',
      'Access-Control-Allow-Methods':'POST'
      })
       return this._http.post<any>("http://localhost:8090/home",{headers:httpOptions});
  }
}
