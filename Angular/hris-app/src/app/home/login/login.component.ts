import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  UsersService } from '../users.service';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { APP_CONSTANTS } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  hide = true;

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
  constructor(
    private userService: UsersService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    // this.cookieService.deleteAll();
  }

  createForm = new FormGroup({
    email: new FormControl(),
    pwd: new FormControl(),
    forgot_pwd:new FormControl(),
  });

  submit() {
    this.userService.loginUser(this.createForm.value).subscribe((data) => {
      console.log('here');
      this.cookieService.set('email', data['email']);
      // this.cookieService.set('user_id',data['user_id'])
      this.cookieService.set('token', data['token']);
      this.cookieService.set('time_to_expire', data['time_to_expire']);
      this.cookieService.set('role', data['role']);
      // this.cookieService.set('role', data['role']);
      // this.cookieService.set('username', data['username']);
      // console.log("here"+this.cookieService.getAll());
      if (data['role'] == APP_CONSTANTS.USER_ROLE) {
        this.cookieService.set('user_id', data['user_id']);
        this.router.navigate(['/']);
      } else if (data['role'] == APP_CONSTANTS.EMP_ROLE) {
        this.cookieService.set('employee_id', data['employee_id']);
        this.cookieService.set('user_id', data['user_id']);
        this.router.navigate(['Employee']);
      } else if (data['role'] == APP_CONSTANTS.HR_ROLE) {
        this.cookieService.set('hr_id', data['hr_id']);
        // this.cookieService.set('user_id', data['user_id']);
        this.router.navigate(['HR']);
      } else {
        this.createForm.reset();
        alert('Invalid Credentials');
      }
    });
  }
}
