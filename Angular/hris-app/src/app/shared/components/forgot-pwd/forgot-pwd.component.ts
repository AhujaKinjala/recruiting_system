import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css'],
})
export class ForgotPwdComponent implements OnInit {
  ForgotPwdForm!: FormGroup;
  email!: string;
  sent!: boolean;

  constructor(private sharedService: SharedService, private router: Router) {}
  ngOnInit() {
    this.forgotPwdForm();
  }

  forgotPwdForm() {
    this.ForgotPwdForm = new FormGroup({
      email: new FormControl(),
    });
  }

  sendMailFn(): void {
    this.sharedService.sendMail(this.email).subscribe({
      next: (data: any) => {
        this.sent = true;
      },
      error: (e: any) => {
        this.router.navigate(['/unauthorized']);
      },
    });
  }

  submit() {
    this.email = this.ForgotPwdForm.get('email')?.value;
    this.sendMailFn();
  }
}
