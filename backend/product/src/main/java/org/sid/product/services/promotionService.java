package org.sid.product.services;
import java.util.List;

import org.sid.product.entities.produit;
import org.sid.product.entities.promotion;
import org.sid.product.repositories.promotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class promotionService {
	@Autowired 
	private promotionRepository repo;
	
	
//---------------------------------------------pour recuperer toutes les promotions--------------------------------
	
			public List<promotion> fetchPromotion()
		    {
		      return repo.findAll();
		    }
//------------------------------------------pour ajouter une promotion---------------------------------------------
			public promotion ajouterPromotion(promotion prom)
			{
				 return repo.save(prom);
			
			}	
			
//----------------------------------------------pour rechercher une promotion par son id-----------------
			public promotion rechercherunepromotion(Long idprom)
			{
				return repo.findByIdpromotion(idprom);
			}
			
//------------------------------------------pour supprimer une promotion---------------------------------------------
			public void supprimerPromotion(Long idp)
			{
				repo.deleteById(idp);
			}		

	
//------------------------------------------pour modifier une promotion---------------------------------------------
			public void modifierPromotion(promotion prom)
						{
							repo.save(prom);
						}		
	
	
	
//------------------------------------------pour rechercher une promotion---------------------------------------------
			public promotion rechercherPromotion(promotion prom)
						{
							return repo.findByIdpromotion(prom.getIdpromotion());
						}	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
