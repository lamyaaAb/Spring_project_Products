package org.sid.product.controllers;
import java.util.*;

import org.sid.product.entities.categorie;
import org.sid.product.services.homeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class homeController {
	
	
	@Autowired
	private homeService service;
	
	@PostMapping("/home") //had login hadi hya lighanzido flekher ta3 url flpost f lmethode fservice fl angular
	@CrossOrigin(origins="http://localhost:4200")
	public List<categorie> homecat() throws Exception
	{
		List<categorie> listCat=service.fetchCategories();
        if(listCat==null)
        	throw new Exception("pas de categories");
		
		
		return listCat;
	}
	
	

}
