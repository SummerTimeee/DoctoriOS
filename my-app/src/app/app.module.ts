import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent} from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
} from '@angular/material';
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
import { BlogComponent } from './blog/blog.component';
import { CarouselComponent } from './blog/carousel/carousel.component';
import { AboutUsComponent } from './blog/about-us/about-us.component';
import { ModifyDeleteFormComponent } from './blog/modify-delete-form/modify-delete-form.component';
import { SocialMediaLinksComponent } from './blog/social-media-links/social-media-links.component';
import { CalendarComponent } from './appointment-page/calendar/calendar.component';
import { PhoneTreatmentsComponent } from './appointment-page/phone-treatments/phone-treatments.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    CountdownTimerComponent,
    CellPhoneImageComponent,
    QuickLinksComponent,
    PromoComponent,
    BlogComponent,
    CarouselComponent,
    AboutUsComponent,
    ModifyDeleteFormComponent,
    SocialMediaLinksComponent,
    PromoComponent,
    AppointmentPageComponent,
    IntroToAppFormComponent,
    NameOfPatientComponent,
    HomeButtonColorComponent,
    FullNameComponent,
    ToolbarComponent,
    CalendarComponent,
    PhoneTreatmentsComponent
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
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
