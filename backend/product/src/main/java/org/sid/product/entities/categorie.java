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
public class categorie implements Serializable {
	
		  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) //pour qu'il soit auto-increment
		  private Long idcat;
		  private String nomcat;
	      private String urlcat;

	}




