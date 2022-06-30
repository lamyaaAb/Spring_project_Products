import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Administrateur } from '../administrateur';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   mssgerror=0;
  admin=new Administrateur();
  constructor(private servicelogin:LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  


   loginAdmin()
   {

     this.servicelogin.adminloginservice(this.admin).subscribe(
      data=>{ 
              this.router.navigate(['home']);

              
            },
      error=> { console.log("hadi hiya erreur ===>"+error);this.mssgerror=1; }
     );
   }


   
  loginfct()
  {
    this.router.navigate(['home']);
  }

}
