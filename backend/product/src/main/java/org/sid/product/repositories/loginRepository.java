package org.sid.product.repositories;

import org.sid.product.entities.administrateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface loginRepository extends  JpaRepository<administrateur,Long> {

	public administrateur findByEmailAndPassword(String email,String password);
	
}
