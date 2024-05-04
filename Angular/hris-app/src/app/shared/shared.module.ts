import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChangePwdComponent } from './components/change-pwd/change-pwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPwdComponent } from './components/forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './components/reset-pwd/reset-pwd.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UnauthorizedComponent,
    ContactUsComponent,
    ChangePwdComponent,
    ForgotPwdComponent,
    ResetPwdComponent,
    
    
  ],
  imports: [
    NgbModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ContactUsComponent
  ]
})
export class SharedModule { }
