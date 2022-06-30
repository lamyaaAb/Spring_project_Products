package org.sid.product.controllers;
import java.util.List;

import org.sid.product.entities.categorie;
import org.sid.product.entities.produit;
import org.sid.product.services.categorieService;
import org.sid.product.services.produitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class produitController {
	
	@Autowired
	private produitService service;
	@Autowired
	private categorieService catservice;
	
	
//--------------------------------la methode qui va repondre au front end correspondant à voir produit	
	
	// @PostMapping("/voirproduit") 
	 @GetMapping("/voirproduit/{idcat}")
	 @CrossOrigin(origins="http://localhost:4200")
	public List<produit> voirProduit(@PathVariable Long idcat ) throws Exception
	  {
       return service.voirProduits(idcat);
	  }
	
//--------------------------------------hadi va etre appelee lorsqu'on va appeler la page produit pour la premiere fois
		@PostMapping("/pageProduit") 
		@CrossOrigin(origins="http://localhost:4200")
		public List<produit> pageprod() throws Exception
		{
			List<produit> listProd=service.fetchProduit();
	        if(listProd==null)
	        	throw new Exception("pas de produits");
				
			return listProd;
		}

//-----------------------------------------pour pouvoir ajouter un produit-------------------------
		@PostMapping("/ajouterProduit") 
		@CrossOrigin(origins="http://localhost:4200")
		public void ajoutcat(@RequestBody produit prod)
		{
	        service.ajouterProduit(prod);
		}
			
//-----------------------------------------pour pouvoir rechrecher un produit -------------------------
		@PostMapping("/rechercherProduit") 
		@CrossOrigin(origins="http://localhost:4200")
		public produit rechprod(@RequestBody produit prod)
		{
			produit produ;
	        produ=service.rechercherProduit(prod);
	        return produ;
	        
		}	
	
//-----------------------------------------pour pouvoir modifier un produit-------------------------
		@PostMapping("/modifierProduit") 
		@CrossOrigin(origins="http://localhost:4200")
		public void modifcat(@RequestBody produit prod)
		{
	        service.modifierProduit(prod);
	       
	        
		}	
	
//-----------------------------------------pour pouvoir supprimer un produit-------------------------
		        @GetMapping("/supprimerProduit/{idprod}")
				@CrossOrigin(origins="http://localhost:4200")
				public void suppprod(@PathVariable Long idprod)
				{
			        service.supprimerProduit(idprod);
				}	
				
//-----------------------------------------pour pouvoir rechercher les prods par leur prom------------------------
		        @GetMapping("/rechProdParProm/{idprom}")
				@CrossOrigin(origins="http://localhost:4200")
				public List<produit> rechProdParProm(@PathVariable Long idprom)
				{
	                int i=1;
	                String nomcat;
					List<produit> prods= service.rechProdParProm(idprom);
//					for(i=0;i<prods.size();i++)
//						System.out.println("haaahoma lprods==>"+prods.get(i));
					//nomcat=prods.get(1).getCat().getNomcat();
					return prods;
				}	
		        
		        
 //-----------------------------------------pour pouvoir rechercher les prods par leur prom------------------------
		        //hadi pour recuperer les produits par leur promo et set l promo l nulle
		        @GetMapping("/rechProdParProm2/{idprom}")
				@CrossOrigin(origins="http://localhost:4200")
				public int rechProdParProm2(@PathVariable Long idprom)
				{
					 int i=0;
					 List<produit> prods;
					 prods= service.rechProdParProm(idprom);
					 for(i=0;i<prods.size();i++)
					 {
						 prods.get(i).setProm(null);
						 this.service.ajouterProduit(prods.get(i));
					 }
					 return 1;
				}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
