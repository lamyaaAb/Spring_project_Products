package org.sid.product.repositories;
import java.util.List;
import org.sid.product.entities.produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface produitRepository extends  JpaRepository<produit,Long> {
	public List<produit> findAllByCat_idcat(Long idcat);
	public produit findByIdproduit(Long idprod);
	public List<produit> findAllByProm_idpromotion(Long idprom);
	

}
