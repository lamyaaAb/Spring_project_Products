package org.sid.product.services;
import java.util.*;
import java.util.stream.Stream;

import org.sid.product.repositories.homeRepository;
import org.sid.product.entities.categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class homeService {
	
	@Autowired  //hadi pour injecter
	private homeRepository repo;
	
	
//----------------------------------------------recuperer l'ensemble des categories----------------------------------------	
	public List<categorie> fetchCategories()
	     {
           return repo.findAll();
	     }
	
//----------------------------------pour initialiser la table categorie-------------------------------------------
		public void initCategorie() {
			        int i;
			        ArrayList<String> imgs=new ArrayList<String>();
			        ArrayList<String> categ=new ArrayList<String>();
			        imgs.add("./assets/images/fruits.jpg");
			        imgs.add("./assets/images/legume.jpg");
			        categ.add("Fruits");
			        categ.add("Légumes");
			        for(i=0;i<imgs.size();i++)
			        {
					    categorie cat=new categorie();
					    cat.setNomcat(categ.get(i));
					    cat.setUrlcat(imgs.get(i));
					     repo.save(cat);	
			        }

		}	

}
