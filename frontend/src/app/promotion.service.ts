import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from './promotion';
import { ProduitComponent } from './produit/produit.component';
import { Produit } from './produit';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private _http:HttpClient) { }

//------------------pour recuperer touus les produits----------------------------------------
getToutePromotion():Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/pagePromotion",{headers:httpOptions});
}

//--------------------------pour ajouter une promotion---------------------------------------

ajouterUnePromotion(prod:Produit):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/ajouterPromotion",prod,{headers:httpOptions});
}

//--------------------------pour ajouter une promotion aux produits correspondants---------------------------------------

ajouterUnePromotion2(prod:Produit):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/ajouterPromo",prod,{headers:httpOptions});
}

//--------------------------pour supprimer un promotion---------------------------------------
supprimerUnePromotion(idp:number):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'GET'
    })
     return this._http.get<any>("http://localhost:8090/supprimerPromotion/"+idp,{headers:httpOptions});
}

  //--------------------------pour rechercher un3 promotion--------------------------------------
  rechercherUnePromotion(promotion:Promotion):Observable<any>
  {
    const httpOptions= new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8090',
      'Access-Control-Allow-Methods':'POST'
      })
       return this._http.post<any>("http://localhost:8090/rechercherPromotion",promotion,{headers:httpOptions});
  }

//--------------------------pour modifier une promotion---------------------------------------
modifierUnePromotion(promotion:Promotion):Observable<any>
{
  const httpOptions= new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8090',
    'Access-Control-Allow-Methods':'POST'
    })
     return this._http.post<any>("http://localhost:8090/modifierPromotion",promotion,{headers:httpOptions});
}
















































}
