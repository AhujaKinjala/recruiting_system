import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userid!:any;
  empid!:any;
  hr!:any;
  constructor(private cookieService:CookieService){}

  ngOnInit(){

    this.isLoggedIn()
    


  }

  isLoggedIn():boolean{
    this.userid= this.cookieService.get('user_id');
    this.empid=!!this.cookieService.get('employee_id');
    this.hr=!!this.cookieService.get('hr_id');
    // this.userid=user_id;
    const loggedIn= (this.userid || this.empid || this.hr);
    // if(user_id){
    //   this.userid=user_id;
    // }
    // else if(employee_id){
    //   this.userid=employee_id;
    // }
    // else if(hr_id){
    //   this.userid=hr_id;
    // }
    // console.log(this.userid)
    return loggedIn;
  }

  logOut(){
    console.log("hello");
    console.log(this.userid);
      this.cookieService.deleteAll();

  }

  

}
