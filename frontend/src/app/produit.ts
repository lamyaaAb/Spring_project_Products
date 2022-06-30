import { Categorie } from "./categorie";
import { Promotion } from "./promotion";

export class Produit {
    idproduit=0;
    nomproduit="";
    qteproduit=0;
    prixproduit=0;
    urlproduit="";
    cat=new Categorie();
    prom=new Promotion();
}
