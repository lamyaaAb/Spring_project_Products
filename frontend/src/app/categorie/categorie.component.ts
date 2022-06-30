import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  tabcat:Categorie[]=[];
  categorie=new Categorie();
  categorie2=new Categorie();
  nomCategorie:any;
  urlCategorie:any;
  urlimg=new String();
  mssgdatamodif=0; mssgerrormodif=0;
  mssgdatasupp=0; mssgerrorsupp=0;
  mssgdataajou=0; mssgerrorajou=0;

  constructor(private router: Router,private _serviceCat:CategorieService) { }


//--------------------------------------pour recuperer toutes les categories--------------------------------------------------------
  ngOnInit(): void {
    this._serviceCat.getTouteCategorie().subscribe(
      data=>{this.tabcat=data},
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

//------------------------------hadi pour nemshiw la page home men lmenu lfou9-----------
  
  getProduit2()
  {
   this.router.navigate(['pageProduit']);
  }

//--------------------------------pour ajouter categorie-----------------------------------
  ajouterCategorie()
    {
      // hna on a simplifié la tache bash luser idekhel ghir le nom o lkmala ta3 lurl tkoun hna
        this.categorie.urlcat="./assets/images/"+this.urlimg;
        this._serviceCat.ajouterUneCategorie(this.categorie).subscribe(
        data=>{console.log("Categorie bien ajoutée");this.mssgdataajou=1},
        error=>{console.log("Categorie n'est pas ajoutée");this.mssgerrorajou=1;}
      );
    }

//------------------------------pour supprimer categorie-----------------------------------
supprimerCategorie()
{
   this._serviceCat.supprimerUneCategorie(this.categorie).subscribe(
    data=>{console.log("Categorie bien supprimée");this.mssgdatasupp=1},
    error=>{console.log("Categorie n'est pas supprimée");this.mssgerrorsupp=1}
  );
}

//------------------------------pour modifier categorie-----------------------------------
modifierCategorie()
{
  if(this.categorie.nomcat.trim().length==0)
        this.categorie.nomcat=this.categorie2.nomcat;

  if(this.categorie.urlcat.trim().length==0)
        this.categorie.urlcat=this.categorie2.urlcat;      

  this._serviceCat.modifierUneCategorie(this.categorie).subscribe(
    data=>{console.log("Categorie bien modifiée");this.mssgdatamodif=1;},
    error=>{console.log("Categorie n'est pas modifiée");this.mssgerrormodif=1;}
  );
}

//------------------------------pour rechercher categorie-----------------------------------
rechercherCategorie()
{
  this._serviceCat.rechercherUneCategorie(this.categorie).subscribe(
    data=>{this.categorie2=data;
          this.nomCategorie=this.categorie2.nomcat;
          this.urlCategorie=this.categorie2.urlcat;
          },
    error=>console.log("Categorie pas trouvée")
  );
}
//-------------------------pour naviguer vers la page de la gestion des promotions----------
getPromotion()
{
  this.router.navigate(['pagePromotion']);
}

























}
