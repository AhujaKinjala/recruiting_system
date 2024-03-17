import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChangePwdComponent } from './components/change-pwd/change-pwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UnauthorizedComponent,
    ContactUsComponent,
    ChangePwdComponent,
    
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
