import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  
  constructor(private _http:HttpClient) { }

//------------------pour recuperer touus les produits----------------------------------------
getToutProduit():Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/pageProduit",{headers:httpOptions});
}



//--------------------------pour ajouter un produit---------------------------------------

  ajouterUnProduit(produit:Produit):Observable<any>
  {
    const httpOptions= new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8090',
      'Access-Control-Allow-Methods':'POST'
      })
       return this._http.post<any>("http://localhost:8090/ajouterProduit",produit,{headers:httpOptions});
  }

  //--------------------------pour rechercher un produit--------------------------------------
rechercherUnProduit(produit:Produit):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/rechercherProduit",produit,{headers:httpOptions});
}

//--------------------------pour modifier un produit---------------------------------------
modifierUnProduit(produit:Produit):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/modifierProduit",produit,{headers:httpOptions});
}

//--------------------------pour supprimer un produit---------------------------------------
supprimerUnProduit(idp:number):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'GET'
    })
     return this._http.get<any>("http://localhost:8090/supprimerProduit/"+idp,{headers:httpOptions});
}

//------------------------rechercher les produits par leur promotion----------
rechProdParProm(idp:number):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'GET'
    })
     return this._http.get<any>("http://localhost:8090/rechProdParProm/"+idp,{headers:httpOptions});
}

//------------------------rechercher les produits par leur promotion----------
rechProdParProm2(idp:number):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'GET'
    })
     return this._http.get<any>("http://localhost:8090/rechProdParProm2/"+idp,{headers:httpOptions});
}


































}
