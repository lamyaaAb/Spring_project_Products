package org.sid.product.services;
import java.util.List;

import org.sid.product.entities.categorie;
import org.sid.product.repositories.categorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;





@Service
public class categorieService {

	
	@Autowired  //hadi pour injecter
	private categorieRepository repo;
	
	
//---------------------------------------------pour recuperer toutes les categories--------------------------------
	
	public List<categorie> fetchCategorie()
    {
      return repo.findAll();
    }

	
//------------------------------------------pour ajouter une categorie---------------------------------------------
	public void ajouterCategorie(categorie cat)
	{
		repo.save(cat);	
	}
	
//------------------------------------------pour supprimer une categorie---------------------------------------------
		public void supprimerCategorie(categorie cat)
		{
			repo.delete(cat);
		}	
	
//------------------------------------------pour rechercher une categorie---------------------------------------------
	public categorie rechercherCategorie(categorie cat)
				{
					return repo.findByIdcat(cat.getIdcat());
				}		
	
//------------------------------------------pour modifier une categorie---------------------------------------------
	public void modifierCategorie(categorie cat)
				{
					repo.save(cat);
				}		
	
		
//-----------------------------------------pour rechercher une categorie selon son nom------------------
	
	public categorie rechercheCategorieParNom(categorie cat)
	{
		return repo.findByNomcat(cat.getNomcat());
	}	
	
	
	
	
	
}
