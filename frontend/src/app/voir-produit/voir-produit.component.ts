import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoirProduitsService } from '../voir-produits.service';
import { Produit } from '../produit';


@Component({
  selector: 'app-voir-produit',
  templateUrl: './voir-produit.component.html',
  styleUrls: ['./voir-produit.component.css']
})
export class VoirProduitComponent implements OnInit {

  testpromotion:number[]=[];
  nouveauxprix:number[]=[];
  i:number=0;
  tabprod:Produit[]=[];
  constructor(private router: Router,private _serviceVoirProduit:VoirProduitsService) { }

//-----------------------------------------en cas d'appui sur home du menu en haut----------
  getCategories1()
  {
    this.router.navigate(['home']);
  }

  //------------------------------------pour recuperer l'ensemble de tous les produits ----------
  ngOnInit(): void {
    this._serviceVoirProduit.getproduit().subscribe(      
      data=>{   this.tabprod=data;
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
      error=> { console.log("hadi hiya erreur ===>"+error) }
     );
  }


//----------------------------------en cas d'appui sur categorie du menu en haut----------
  getpagecategorie1()
  {
    this.router.navigate(['pageCategorie']);
  }


//----------------------------------en cas d'appui sur produit du menu en haut----------
  getpageproduit()
  {
   this.router.navigate(['pageProduit']);
  }

//-------------------------pour naviguer vers la page de la gestion des promotions----------
getPromotion()
{
  this.router.navigate(['pagePromotion']);
}


 

}
