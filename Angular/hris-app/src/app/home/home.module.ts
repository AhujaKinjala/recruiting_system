import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppRoutingModule } from '../app-routing.module';
import { GeneralComponent } from './general/general.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { JobComponent } from './job/job.component';
import { SinglejobComponent } from './singlejob/singlejob.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { OriginalDocumentsComponent } from './original-documents/original-documents.component';
import { NationalHolidaysComponent } from './national-holidays/national-holidays.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeroComponent,
    LoginComponent,
    RegisterComponent,
    QualificationComponent,
    ExperienceComponent,
    GeneralComponent,
    PhotoComponent,
    JobComponent,
    SinglejobComponent,
    ForgotPwdComponent,
    OriginalDocumentsComponent,
    NationalHolidaysComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDatepickerModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  exports: [PhotoComponent,NationalHolidaysComponent],
})
export class HomeModule {}
