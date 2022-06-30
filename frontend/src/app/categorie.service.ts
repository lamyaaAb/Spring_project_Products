import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private _http:HttpClient) { }
  

//------------------pour recuperer touutes les categories----------------------------------------
  getTouteCategorie():Observable<any>
  {
    const httpOptions= new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8090',
      'Access-Control-Allow-Methods':'POST'
      })
       return this._http.post<any>("http://localhost:8090/pageCategorie",{headers:httpOptions});
  }

  //--------------------------pour ajouter une categorie---------------------------------------

  ajouterUneCategorie(categorie:Categorie):Observable<any>
  {
    const httpOptions= new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8090',
      'Access-Control-Allow-Methods':'POST'
      })
       return this._http.post<any>("http://localhost:8090/ajouterCategorie",categorie,{headers:httpOptions});
  }

//--------------------------pour supprimer une categorie---------------------------------------
supprimerUneCategorie(categorie:Categorie):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/supprimerCategorie",categorie,{headers:httpOptions});
}

//--------------------------pour rechercher une categorie---------------------------------------
rechercherUneCategorie(categorie:Categorie):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/rechercherCategorie",categorie,{headers:httpOptions});
}

//--------------------------pour modifier une categorie---------------------------------------
modifierUneCategorie(categorie:Categorie):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/modifierCategorie",categorie,{headers:httpOptions});
}


//------------------------Pour recuperer une categorie par son nom--------------------------------------------------
getCategorieParNom(cat:Categorie)
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/getNomCategorie",cat,{headers:httpOptions});

}
























}
