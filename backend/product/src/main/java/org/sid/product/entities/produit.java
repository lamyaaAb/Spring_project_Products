package org.sid.product.entities;


import java.io.Serializable;
import java.util.Collection;
import javax.annotation.Generated;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@AllArgsConstructor @NoArgsConstructor @ToString
@Entity
public class produit implements Serializable{
	  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) //pour qu'il soit auto-increment
	  private Long idproduit;
	  private String nomproduit;
      private Double prixproduit;
      private Integer qteproduit;
      private String urlproduit;
      @ManyToOne
      private categorie cat;
      @ManyToOne
      private promotion prom;

}
