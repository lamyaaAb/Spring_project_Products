import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../promotion.service';
import { Promotion } from '../promotion';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(private router: Router,private _serviceProm:PromotionService,private _serviceProd:ProduitService) { }
  tabprom:Promotion[]=[];
  tabprod:Produit[]=[];
  prom=new Promotion();
  prom2=new Promotion();
  nomcat :string="";
  nomcat2 :string="";
  prod=new Produit();
  prod2=new Produit();
  
  //hado pour les messages après la modif ou la supp ou l'ajout
  mssgdatamodif=0; mssgerrormodif=0;
  mssgdatasupp=0; mssgerrorsupp=0;
  mssgdataajou=0; mssgerrorajou=0;
  mssgerrortaux=0;



//--------------------------------------hadi pour qu'on puisse récupérer la liste des promotions lors de l'appel de la page y correspondant------------
  ngOnInit(): void {
    this._serviceProm.getToutePromotion().subscribe(
      data=>{this.tabprom=data},
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

//--------------------------------pour ajouter promotion-----------------------------------
ajouterPromotion()
{  
    this.mssgerrortaux=0;
    if(this.prom.tauxreduction>1)
       this.mssgerrortaux=1;
    else
      {
        this.prod.cat.nomcat=this.nomcat;
        this.prod.prom=this.prom;
        this
        this._serviceProm.ajouterUnePromotion(this.prod).subscribe(
            data=>{ this.prom=data;
                   this.prod.prom=this.prom; 
                    this._serviceProm.ajouterUnePromotion2(this.prod).subscribe(
                    data2=>{console.log("it wooooooorked"); this.mssgdataajou=1;},
                    error2=>console.log("erreeeeeeeeeeeeeeeeeeeeeeur2")
                    );
            },
            error=>{  console.log("erreeeeeeeeeeeeeeeeeeeeeeur"); this.mssgerrorajou=1;}
            );    
      }  

}

//------------------------------pour supprimer promotion-----------------------------------
supprimerPromotion()
{
   this._serviceProm.supprimerUnePromotion(this.prom.idpromotion).subscribe(
    data=>{console.log("Promotion bien supprimée"); this.mssgdatasupp=1},
    error=>{console.log("Promotion n'est pas supprimée");this.mssgerrorsupp=1}
  );
}

//------------------------------pour rechercher promotion-----------------------------------
rechercherPromotion()
{
  this._serviceProm.rechercherUnePromotion(this.prom).subscribe(
    data=>{ this.prom2=data;
            this._serviceProd.rechProdParProm(this.prom2.idpromotion).subscribe(
            data2=>{ this.tabprod=data2; this.nomcat2=this.tabprod[1].cat.nomcat;},
            error2=>console.log("error2"+error2)
                    );
         },
    error=>console.log("llaallala")
    );
   
          

}

//------------------------------pour modifier promotion-----------------------------------
modifierPromotion()
{
  if(this.prom.nompromotion.trim().length==0)
        this.prom.nompromotion=this.prom2.nompromotion;

  if(!this.prom.tauxreduction)
        this.prom.tauxreduction=this.prom2.tauxreduction; 

  //l'admin n''a pas changé le nom de la catégorie
   if(this.nomcat.trim().length==0)
     {
       this.nomcat=this.nomcat2; 

       this._serviceProm.modifierUnePromotion(this.prom).subscribe(
        data2=>{console.log("Promotion bien modifiée");  this.mssgdatamodif=1},
        error2=>{ this.mssgerrormodif=1;}
                                                   );
     }

    //si l'admin a choisi de modifier le nom de la categorie doonc le traitement ne sera pas le meme
    //on doit d'abord supprimer la promo de l'ancienne catégorie
     if(this.nomcat.trim().length!=0)
     {
         this._serviceProd.rechProdParProm2(this.prom.idpromotion).subscribe(
         data=>{
          
                  this.prod.cat.nomcat=this.nomcat;
                  this.prod.prom=this.prom;
                  this._serviceProm.ajouterUnePromotion(this.prod).subscribe(
                  data3=>{ this.prom=data3;
                       this.prod.prom=this.prom; 
                        this._serviceProm.ajouterUnePromotion2(this.prod).subscribe(
                        data2=>{console.log("it wooooooorked"); this.mssgdatamodif=1;},
                        error2=>console.log("erreeeeeeeeeeeeeeeeeeeeeeur2")
                        );
                        },
                   error=>{  console.log("erreeeeeeeeeeeeeeeeeeeeeeur"); this.mssgerrormodif=1;}
                       );    
              },
         error=>console.log("Produit pas trouvé")
            );

      }
      
}











































}
