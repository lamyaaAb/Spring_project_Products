import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VoirProduitsService {
  idcategorie:number|undefined;
  constructor(private _http:HttpClient) { }


  setidcategorie(idcat:number)
  {
    this.idcategorie=idcat;
  }


//-------------------------------------
  getproduit():Observable<any>
  {
    
    const httpOptions= new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8090',
      'Access-Control-Allow-Methods':'Get'
      })

    return this._http.get<any>("http://localhost:8090/voirproduit/"+this.idcategorie,{headers:httpOptions});
  }
}
