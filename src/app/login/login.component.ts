import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  model: any = {};
  InvalidEmail :boolean = false;
  InvalidPassword:boolean = false;
  
  onSubmit() {
   

    if (this.model.email !== "admin@persistent.com"){
      this.InvalidEmail = true;
      
    }
    if(this.model.password !== "BookingAdmin"){
      //console.log('pass else')
      this.InvalidPassword = true;
    }

    if(this.model.email == "admin@persistent.com" && this.model.password == "BookingAdmin"){
      this.router.navigate(['/crud']); 
    } 
    // if (this.model.email !== "admin@persistent.com" || this.model.password !== "BookingAdmin"){
    //   console.log('in else')
    //   this.InvalidEmail = true;
    //   this.InvalidPassword = true;
    // }
  }

}
