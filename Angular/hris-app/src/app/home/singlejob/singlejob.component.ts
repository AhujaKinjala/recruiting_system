import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from '../users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singlejob',
  templateUrl: './singlejob.component.html',
  styleUrls: ['./singlejob.component.css'],
})
export class SinglejobComponent implements OnInit {
  id!: any;
  title!: any;
  description!: any;
  activeYN!: any;
  department_name!: any;
  minimum_qualifications!: any;
  employment_type!: any;
  key_role!: any;
  location!: any;
  date_posted!: any;
  skills!: any;
  skill!: string[];
  show: boolean = false;
  display!: any;

  constructor(
    private cookieService: CookieService,
    private router: ActivatedRoute,
    private userService: UsersService,
    private erouter: Router
  ) {}
  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.title = params['title'];
      this.description = params['description'];
      this.activeYN = params['activeYN'];
      this.date_posted = params['date_posted'];
      this.department_name = params['department_name'];
      this.minimum_qualifications = params['minimum_qualifications'];
      this.key_role = params['key_role'];
      this.employment_type = params['employment_type'];
      this.location = params['location'];
      this.skills = params['skills'];
      this.skill = this.skills.split(',');
    });
  }

  createForm = new FormGroup({
    userid: new FormControl(),
    j_id: new FormControl(),
  });

  openToast() {
    this.show = true;
  }

  closeToast() {
    this.show = false;
    this.display = 0;
    this.erouter.navigate(['/']);
  }

  insertApplication(): void {
    this.userService
      .insertApplication(this.createForm.value)
      .subscribe((data) => {
        this.display = 1;
        this.openToast();
      });
  }

  submit() {
    const usid = this.cookieService.get('user_id');
    if (usid == '') {
      this.erouter.navigate(['/login']);
    } else {
      this.createForm
        .get('userid')
        ?.setValue(parseInt(this.cookieService.get('user_id')));

      this.createForm.get('j_id')?.setValue(parseInt(this.id));

      this.insertApplication();
    }
  }
}
