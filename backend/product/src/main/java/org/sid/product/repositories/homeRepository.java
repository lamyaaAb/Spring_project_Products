package org.sid.product.repositories;
import org.sid.product.entities.categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface homeRepository extends  JpaRepository<categorie,Long>  {

}
