package org.sid.product.entities;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor @NoArgsConstructor @ToString
@Entity //hadi bash tcreeya une table au niveau de la bd aynat le eme nom que cette classe
public class promotion  implements Serializable {
	 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) //pour qu'il soit auto-increment et clé primaire
	 private Long idpromotion;
	 private String nompromotion;
     private Double tauxreduction;



}
