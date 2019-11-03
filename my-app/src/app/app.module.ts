import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatMenuModule, MatFormFieldModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { IntroToAppFormComponent } from './appointment-page/intro-to-app-form/intro-to-app-form.component';
import { NameOfPatientComponent } from './appointment-page/name-of-patient/name-of-patient.component';
import { HomeButtonColorComponent } from './appointment-page/home-button-color/home-button-color.component';
import { FullNameComponent } from './appointment-page/full-name/full-name.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CountdownTimerComponent } from './home/countdown-timer/countdown-timer.component';
import { CellPhoneImageComponent } from './home/cell-phone-image/cell-phone-image.component';
import { QuickLinksComponent } from './home/quick-links/quick-links.component';
import { PromoComponent } from './home/promo/promo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountdownTimerComponent,
    CellPhoneImageComponent,
    QuickLinksComponent,
    PromoComponent,
    AppointmentPageComponent,
    IntroToAppFormComponent,
    NameOfPatientComponent,
    HomeButtonColorComponent,
    FullNameComponent,
    ToolbarComponent
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
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
