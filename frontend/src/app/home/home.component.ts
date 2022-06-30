import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { HomeserviceService } from '../homeservice.service';
import { Router } from '@angular/router';
import { VoirProduitsService } from '../voir-produits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  fruits: String='./assets/images/fruits.jpg';
  legumes: String='./assets/images/legume.jpg';
  electro: String='./assets/images/electro.jpg';

  //va contenir l'ensemble des categories retournées
  tabcat:Categorie[]=[];

  //poser les objets f constructeur katssema dependency injection
  constructor(private _service:HomeserviceService,private router: Router,private _serviceVoirProduit:VoirProduitsService) { }
 
 
  //-------------------------------------------------la methode pour recuperer toutes les categories-----
  getCategories()
  {
      this._service.getCategorie().subscribe(
        data=>{this.tabcat=data},
        error=> { console.log("hadi hiya erreur ===>"+error) }
       );
  }


  //-------------------------------------la methodes pour recuperer les produits d'une categorie--------
  voirproduit(idcat:number)
  {
    this._serviceVoirProduit.setidcategorie(idcat);
    this.naviguer();
   
  }

//--------------------------------------------pour naviguer vers le component voir produit------------
  naviguer()
  {
    this.router.navigate(['voirProduit']);
  }

  //hadi katlanca awal wehda flcode
  ngOnInit(): void {
    this.getCategories();
  }


  //-----------------------------------------pour naviguer vers la pages des crud categories----------

  getpagecategorie()
  {
    this.router.navigate(['pageCategorie']);
  }

//-----------------------------------------pour naviguer vers la pages des crud produits----------

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
