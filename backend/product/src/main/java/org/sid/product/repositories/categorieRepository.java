package org.sid.product.repositories;
import org.sid.product.entities.categorie;
import org.springframework.data.jpa.repository.JpaRepository;




public interface categorieRepository extends  JpaRepository<categorie,Long> {
	
	public categorie findByIdcat(Long idcat);
	public categorie findByNomcat(String nomcat);

}
