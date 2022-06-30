package org.sid.product;

import org.sid.product.services.homeService;
import org.sid.product.services.loginService;
import org.sid.product.services.produitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProductApplication implements CommandLineRunner{

	@Autowired
	private loginService serv;
	@Autowired
	private homeService servh;
	@Autowired
	private produitService servp;
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(ProductApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
               serv.initAdmin();
               servh.initCategorie();
               servp.initProduit();
		
	}

}
