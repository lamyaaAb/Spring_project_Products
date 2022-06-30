package org.sid.product.controllers;
import java.util.ArrayList;
import java.util.List;

import org.sid.product.entities.categorie;
import org.sid.product.entities.produit;
import org.sid.product.entities.promotion;
import org.sid.product.repositories.produitRepository;
import org.sid.product.repositories.promotionRepository;
import org.sid.product.services.categorieService;
import org.sid.product.services.promotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





@RestController
public class promotionController {
	
	@Autowired
	private promotionService service;
	@Autowired
	private categorieService catservice;
	@Autowired 
	private produitRepository prodrepo;
	
//--------------------------------------hadi va etre appelee lorsqu'on va appeler la page promotion pour la premiere fois
			@PostMapping("/pagePromotion") 
			@CrossOrigin(origins="http://localhost:4200")
			public List<promotion> pageprod() throws Exception
			{
				List<promotion> listProm=service.fetchPromotion();
		        if(listProm==null)
		        	throw new Exception("pas de promotions");
					
				return listProm;
			}
//---------------------pour rechercher une promotion par son id---------------------------------
			public promotion rechercherprom(Long idprom)
			{
				return this.service.rechercherunepromotion(idprom);
			}

			
//-----------------------------------------pour pouvoir ajouter une promotion-------------------------
			@PostMapping("/ajouterPromotion") 
			@CrossOrigin(origins="http://localhost:4200")
			public promotion ajoutprom(@RequestBody produit prod)
			{
				 categorie cat=new categorie();
				 List<produit> prods;
				 int i;
				// on enrigstre d'abord la promotion f la bd
				 return service.ajouterPromotion(prod.getProm());       	
			}
			
//-----------------------------------------pour pouvoir ajouter une promotion aux produits associés-------------------------
			//db lfonction lewla enregistraat la promo hiya lewla fla bd , db on va l'affecter aux produits
			@PostMapping("/ajouterPromo") 
			@CrossOrigin(origins="http://localhost:4200")
			public void ajoutpromo(@RequestBody produit prod)
			{
				 categorie cat=new categorie();
				 List<produit> prods;
				 int i;
				 Double prix;
				 
				 // on cherche la categorie saisie concernée par la promotion
				      cat.setNomcat(prod.getCat().getNomcat());
				      cat=this.catservice.rechercheCategorieParNom(cat);
				 //db on doit trouver la liste des produit se trouvant dans cette categorie
				      prods=this.prodrepo.findAllByCat_idcat(cat.getIdcat());
				    
			    //db apres avoir trouvé la liste des produits auxquels on va appliquer la promotion, khass n initialisiw leur attribut promotion
               	      for(i=0;i<prods.size();i++)
               	          {
               	    	      prods.get(i).setProm(prod.getProm());
               	    	      //pour changer le prix fla bd
               	    	      //prix=prods.get(i).getPrixproduit();
               	    	     // prods.get(i).setPrixproduit(prix-(prix*prod.getProm().getTauxreduction()));
               		        //pour enregister fla bd
               		        this.prodrepo.save(prods.get(i));
               		               
               	          }
			}
	
//-----------------------------------------pour pouvoir supprimer une promotion-------------------------
	        @GetMapping("/supprimerPromotion/{idprom}")
			@CrossOrigin(origins="http://localhost:4200")
			public void suppprod(@PathVariable Long idprom)
			{
	        	promotion prom=new promotion();
	        	List<produit>prods;
	        	int i;
	           //on doit d'abord recuperer l'objet promotion concernée
	        	prom=this.rechercherprom(idprom);
	           //et avant de supprimer la promotion concernée il faut d'abord retourner lprix ancien des produits
	        	prods=this.prodrepo.findAllByProm_idpromotion(idprom);
	        	for(i=0;i<prods.size();i++)
	        	  {
	        		 //On retourne d'abord l'ancien prix
	        		//prods.get(i).setPrixproduit(prods.get(i).getPrixproduit()+(prods.get(i).getPrixproduit()*prom.getTauxreduction()));
	        		//on supprime la promo du produit
	        		prods.get(i).setProm(null);
	        		//on enregistre au niveau de la bd
	        		this.prodrepo.save(prods.get(i));
	        	  }
	        	//finalemet on supprime la promotion souhaitée
		        service.supprimerPromotion(idprom);
			}	
			
	
	
//-----------------------------------------pour pouvoir modifier une promotion-------------------------
			@PostMapping("/modifierPromotion") 
			@CrossOrigin(origins="http://localhost:4200")
			public void modifcat(@RequestBody promotion prom)
			{
		        service.modifierPromotion(prom);
		       
		        
			}	
	
	
//-----------------------------------------pour pouvoir rechrecher une promotion-------------------------
			@PostMapping("/rechercherPromotion") 
			@CrossOrigin(origins="http://localhost:4200")
			public promotion rechprom(@RequestBody promotion prom)
			{
		       return  service.rechercherPromotion(prom);
		        
		        
			}		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
