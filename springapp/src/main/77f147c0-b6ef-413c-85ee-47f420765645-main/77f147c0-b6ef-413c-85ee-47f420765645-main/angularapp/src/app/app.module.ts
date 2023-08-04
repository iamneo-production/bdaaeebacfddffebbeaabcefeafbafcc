import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CustomerapplyformComponent } from './customerapplyform/customerapplyform.component';
import { CustomerapplydocumentComponent } from './customerapplydocument/customerapplydocument.component';
import { CustomerapplyresponseComponent } from './customerapplyresponse/customerapplyresponse.component';
import { CustomercorrectionformComponent } from './customercorrectionform/customercorrectionform.component';
import { CustomercorrectiondocumentComponent } from './customercorrectiondocument/customercorrectiondocument.component';
import { ApplieddocumentsComponent } from './applieddocuments/applieddocuments.component';
import { VerificationComponent } from './verification/verification.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CorrectiondocumentsComponent } from './correctiondocuments/correctiondocuments.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { GenerateAadharComponent } from './generate-aadhar/generate-aadhar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CustomerapplyformComponent,
    CustomerapplydocumentComponent,
    CustomerapplyresponseComponent,
    CustomercorrectionformComponent,
    CustomercorrectiondocumentComponent,
    ApplieddocumentsComponent,
    VerificationComponent,
    AdminhomeComponent,
    CorrectiondocumentsComponent,
    AadharComponent,
    TrackstatusComponent,
    TrackpageComponent,
    GenerateAadharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
