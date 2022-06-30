package org.sid.product.services;

import org.sid.product.entities.administrateur;
import org.sid.product.repositories.loginRepository;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@Service
public class loginService {
	
	@Autowired  //hadi pour injecter
	private loginRepository repo;
	
	
	
//----------------------------------pour initialiser la table administrateur-------------------------------------------
	public void initAdmin() {
			administrateur admin=new administrateur();
			admin.setEmail("admin@gmail.com");
			admin.setPassword("admin");
			repo.save(admin);	
	}
	
//-------------------------------------------------------------------------------------------------------------------
	
	public administrateur fetchByEmailAndPassword(String email,String password)
	{

           return repo.findByEmailAndPassword(email,password);

	}
	
	
	

}
