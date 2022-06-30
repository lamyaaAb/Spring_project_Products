import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VoirProduitComponent } from './voir-produit/voir-produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { PromotionComponent } from './promotion/promotion.component';


const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'home', component: HomeComponent},
  {path:'voirProduit', component: VoirProduitComponent},
  {path:'pageCategorie', component: CategorieComponent},
  {path:'pageProduit', component: ProduitComponent},
  {path:'pagePromotion', component: PromotionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
