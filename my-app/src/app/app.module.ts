import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { IntroToAppFormComponent } from './appointment-page/intro-to-app-form/intro-to-app-form.component';
import { NameOfPatientComponent } from './appointment-page/name-of-patient/name-of-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AppointmentPageComponent,
    IntroToAppFormComponent,
    NameOfPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
