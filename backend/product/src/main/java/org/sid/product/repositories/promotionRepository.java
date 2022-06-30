package org.sid.product.repositories;

import org.sid.product.entities.produit;
import org.sid.product.entities.promotion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface promotionRepository  extends  JpaRepository<promotion,Long>  {
	public promotion findByIdpromotion(Long idprom);


}
