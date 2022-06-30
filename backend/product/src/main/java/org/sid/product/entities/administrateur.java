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
@Table(name="administrateur")
public class administrateur implements Serializable {
	  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) //pour qu'il soit auto-increment
	  private Long id;
	  private String nom;
      private String prenom;
      private String email;
      private String password;
}

