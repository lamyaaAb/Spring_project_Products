import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';
import { Promotion } from '../promotion';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  tabprod:Produit[]=[];
  tabcat:Categorie[]=[];
  prod=new Produit();
  prod2=new Produit();
  nomCat=new String();
  urlimg=new String();
  categorie=new Categorie();
  categorie2=new Categorie();
  mssgdatamodif=0; mssgerrormodif=0;
  mssgdatasupp=0; mssgerrorsupp=0;
  mssgdataajou=0; mssgerrorajou=0;
  testpromotion:number[]=[];
  nouveauxprix:number[]=[];
  i:number=0;
  constructor(private router: Router,private _serviceProd:ProduitService,private _serviceCat:CategorieService) { }



//----------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this._serviceProd.getToutProduit().subscribe(
      data=>{
              this.tabprod=data;
              for(this.i=0;this.i<this.tabprod.length;this.i++)
              { 
                if(this.tabprod[this.i].prom)//ze3ma le produit a subi une promo(elle est pas nulle)
                    {
                      this.nouveauxprix[this.i]=this.tabprod[this.i].prixproduit-(this.tabprod[this.i].prixproduit*this.tabprod[this.i].prom.tauxreduction);
                      this.testpromotion[this.i]=1; 
                    }
                else  //le produit n'a pas subi une promo   
                    {
                     this.testpromotion[this.i]=0; 
                     this.nouveauxprix[this.i]=0;
                    }
              }
            },
      error=>console.log("erreeeeeeeeeeeeeeeeeeeeeeur")
    );
  }

//------------------------------hadi pour l'item categorie du menu au dessus de la page---------
getCategories2()
{
  this.router.navigate(['pageCategorie']);
}

//------------------------------hadi pour nemshiw la page home men lmenu lfou9-----------

gethome2()
{
this.router.navigate(['home']);
}

//-----------------------------------hadi pour recuperer les noms des categories-----------
getCatParNom(cat:Categorie)
  {
    this._serviceCat.getCategorieParNom(cat).subscribe(
      data=>{this.prod.cat=data;
             this._serviceProd.ajouterUnProduit(this.prod).subscribe(
            data1=>{console.log("Produit bien ajouté");this.mssgdataajou=1;},
            error=>{console.log("Produit n'est pas ajouté");this.mssgerrorajou=1;}
        );
      
      
      
          },
      error=>console.log("erreeeeeeeeeeeeeeeeeeeeeeur")
    );

 }


//--------------------------------pour ajouter produit-----------------------------------
ajouterProduit()
{ 
   this.prod.urlproduit="./assets/images/"+this.urlimg;
   this.getCatParNom(this.categorie);

}

//------------------------------------------rechercer toutes les categories---------
rechercherCats()
{
  this._serviceCat.getTouteCategorie().subscribe(
    data=>this.tabcat=data,
    error=>console.log("erreuuuuuuur")
  );
}

//------------------------------pour rechercher produit-----------------------------------
rechercherProduit()
{
  this._serviceProd.rechercherUnProduit(this.prod).subscribe(
    data=>{this.prod2=data;
          //this.nomCategorie=this.categorie2.nomcat;
          //this.urlCategorie=this.categorie2.urlcat;
          },
    error=>console.log("Produit pas trouvé")
  );
}

//------------------------------pour modifier produit-----------------------------------
modifierProduit()
{
  if(this.prod.nomproduit.trim().length==0)
        this.prod.nomproduit=this.prod2.nomproduit;

  if(this.prod.urlproduit.trim().length==0)
        this.prod.urlproduit=this.prod2.urlproduit; 

  if(!this.prod.qteproduit)
        this.prod.qteproduit=this.prod2.qteproduit; 
  
  if(!this.prod.prixproduit)
        this.prod.prixproduit=this.prod2.prixproduit; 

   if(this.prod.cat.nomcat.trim().length==0)
     {
       this.prod.cat.nomcat=this.prod2.cat.nomcat; 
      }
      
       this._serviceCat.getCategorieParNom(this.prod.cat).subscribe(
        data=>{this.prod.cat=data;
                this._serviceProd.modifierUnProduit(this.prod).subscribe(
                data2=>{console.log("Produit bien modifié");  this.mssgdatamodif=1},
                error2=>{ this.mssgerrormodif=1;}
                                                           );
              },
        error=>console.log("erreeeeeeeeeeeeeeeeeeeeeeur")
      );
      
}


//------------------------------pour supprimer produit-----------------------------------
supprimerProduit()
{
   this._serviceProd.supprimerUnProduit(this.prod.idproduit).subscribe(
    data=>{console.log("Produit bien supprimé"); this.mssgdatasupp=1},
    error=>{console.log("Produit n'est pas supprimé");this.mssgerrorsupp=1}
  );
}


//-------------------------pour naviguer vers la page de la gestion des produits----------
getProduit()
{
  this.router.navigate(['pageProduit']);
}

//-------------------------pour naviguer vers la page de la gestion des promotions----------
getPromotion()
{
  this.router.navigate(['pagePromotion']);
}












}
