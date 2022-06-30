package org.sid.product.controllers;
import java.util.List;

import org.sid.product.entities.categorie;
import org.sid.product.entities.produit;
import org.sid.product.repositories.produitRepository;
import org.sid.product.services.categorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;






@RestController
public class categorieController {
	
	@Autowired
	private categorieService service;
	@Autowired
	private produitRepository prodrepo;
	
	
//--------------------------------------hadi va etre appelee lorsqu'on va appeler la page categorie pour la premiere fois
	@PostMapping("/pageCategorie") 
	@CrossOrigin(origins="http://localhost:4200")
	public List<categorie> pagecat() throws Exception
	{
		List<categorie> listCat=service.fetchCategorie();
        if(listCat==null)
        	throw new Exception("pas de categories");
			
		return listCat;
	}
	
	
//-----------------------------------------pour pouvoir ajouter une categorie-------------------------
	@PostMapping("/ajouterCategorie") 
	@CrossOrigin(origins="http://localhost:4200")
	public void ajoutcat(@RequestBody categorie cat)
	{
        service.ajouterCategorie(cat);
	}
	
//-----------------------------------------pour pouvoir supprimer une categorie-------------------------
		@PostMapping("/supprimerCategorie") 
		@CrossOrigin(origins="http://localhost:4200")
		public void suppcat(@RequestBody categorie cat)
		{
			List<produit> prods;
			int i;
			//il faut d'abord supprimer les produits de cette categorie
			prods=this.prodrepo.findAllByCat_idcat(cat.getIdcat());
			for(i=0;i<prods.size();i++)
			  {
			    this.prodrepo.delete(prods.get(i));
			  }
			//maintenant on supprime la categorie
	        service.supprimerCategorie(cat);
		}	
		
//-----------------------------------------pour pouvoir rechrecher une categorie-------------------------
				@PostMapping("/rechercherCategorie") 
				@CrossOrigin(origins="http://localhost:4200")
				public categorie rechcat(@RequestBody categorie cat)
				{
					categorie cate;
			        cate=service.rechercherCategorie(cat);
			        return cate;
			        
				}	
	
//-----------------------------------------pour pouvoir modifier une categorie-------------------------
				@PostMapping("/modifierCategorie") 
				@CrossOrigin(origins="http://localhost:4200")
				public void modifcat(@RequestBody categorie cat)
				{
			        service.modifierCategorie(cat);
			       
			        
				}		
	
//-----------------------------------------pour pouvoir rechrecher une categorie d'apres son nom-------------------------
				@PostMapping("/getNomCategorie") 
				@CrossOrigin(origins="http://localhost:4200")
				public categorie rechecat(@RequestBody categorie cat) throws Exception
				{
					categorie cate;
			        cate=service.rechercheCategorieParNom(cat);
			        if(cate==null)
			        	throw new Exception("Pas de categorie");
			        return cate;
			        
				}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
