package org.sid.product.services;
import java.util.ArrayList;
import java.util.List;

import org.sid.product.entities.categorie;
import org.sid.product.entities.produit;
import org.sid.product.repositories.produitRepository;
import org.sid.product.repositories.homeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;





@Service
public class produitService {
	@Autowired 
	private produitRepository repo;
	@Autowired
	private homeRepository repoc;
	
//----------------------------------------------------la fonction qui va chercher les produits-------------------------------------------------	
	public List<produit> voirProduits(Long idcat)
	{
		return repo.findAllByCat_idcat(idcat);
	}
	
//----------------------------------------------------la fonction qui va inserer des produits au lancement du projet-----------------
	
	public void initProduit() {
        int i;
        ArrayList<String> noms=new ArrayList<String>();
        ArrayList<String> imgs=new ArrayList<String>();
        ArrayList<Double> prix=new ArrayList<Double>();
        ArrayList<Integer> qte=new ArrayList<Integer>();
        ArrayList<categorie> cat=new ArrayList<categorie>();
        imgs.add("./assets/images/banane.jpg");
        imgs.add("./assets/images/pasteque.jpg");
        noms.add("Banane");
        noms.add("Pastèque");
        prix.add(10.0);
        prix.add(20.0);
        qte.add(20);
        qte.add(20);
        
        imgs.add("./assets/images/tomates.jpg");
        imgs.add("./assets/images/choufleur.jpg");
        noms.add("Tomate");
        noms.add("choufleur");
        prix.add(5.0);
        prix.add(5.0);
        qte.add(20);
        qte.add(20);
        //Pour pouvoir récupérer les categories fruits et légumes respectivement
        repoc.findAll().forEach(c->{
        	String nomcat;
        	nomcat=c.getNomcat();
        	if(nomcat.equals("Fruits"))
        	{
        		cat.add(c);
        		cat.add(c);
        	}
        	if(nomcat.equals("Légumes"))
        	{
        		cat.add(c);
        		cat.add(c);
        	}
        	
        });
         for(i=0;i<noms.size();i++)
           {
			produit prod=new produit();
			prod.setNomproduit(noms.get(i));
			prod.setPrixproduit(prix.get(i));
			prod.setQteproduit(qte.get(i));
			prod.setUrlproduit(imgs.get(i));
			prod.setCat(cat.get(i));
			repo.save(prod);
	
            }

}
	
//---------------------------------------------pour recuperer tous les produits--------------------------------
	
		public List<produit> fetchProduit()
	    {
	      return repo.findAll();
	    }
		
//------------------------------------------pour ajouter un produit---------------------------------------------
		public void ajouterProduit(produit prod)
		{
			repo.save(prod);	
		}
		
//------------------------------------------pour rechercher un produit---------------------------------------------
		public produit rechercherProduit(produit prod)
					{
						return repo.findByIdproduit(prod.getIdproduit());
					}	
	
	
	
//------------------------------------------pour modifier un produit---------------------------------------------
		public void modifierProduit(produit prod)
					{
						repo.save(prod);
					}		
		
//------------------------------------------pour supprimer un produit---------------------------------------------
				public void supprimerProduit(Long idp)
				{
					repo.deleteById(idp);
				}		
	
//------------------------------------------pour rechercher les produits par leur  prom---------------------------------------------
				//mais en fait va etre utiliser pour recuperer la categorie des produits d'apres l'id d'une promo
			public List<produit> rechProdParProm(Long idprom)
							{

								return this.repo.findAllByProm_idpromotion(idprom);
							}
	
	
	
	
}
