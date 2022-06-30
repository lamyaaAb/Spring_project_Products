package org.sid.product.controllers;

import org.sid.product.entities.administrateur;
import  org.sid.product.services.loginService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class loginController {
	
	
	@Autowired
	private loginService service;
	
	
	@PostMapping("/login") //had login hadi hya lighanzido flekher ta3 url flpost f lmethode fservice fl angular
	@CrossOrigin(origins="http://localhost:4200")
	public administrateur loginadmin(@RequestBody administrateur admin) throws Exception
	{
		String tempEmail,tempMdp;
		tempEmail=admin.getEmail();
		tempMdp=admin.getPassword();
		administrateur tempAdmin=null;
		if(tempEmail !=null && tempMdp!=null)
		    {  
			  tempAdmin=service.fetchByEmailAndPassword(tempEmail,tempMdp);
		    }
        if(tempAdmin==null)
        	throw new Exception("email ou mot de passe invalid");
		
		
		return tempAdmin;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
