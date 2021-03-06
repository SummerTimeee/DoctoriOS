import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
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
import { MatExpansionModule } from '@angular/material/expansion';



import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CountdownTimerComponent } from './home/countdown-timer/countdown-timer.component';
import { CellPhoneImageComponent } from './home/cell-phone-image/cell-phone-image.component';
import { QuickLinksComponent } from './home/quick-links/quick-links.component';
import { PromoComponent } from './home/promo/promo.component';
import { BlogComponent } from './blog/blog.component';
import { CarouselComponent } from './blog/carousel/carousel.component';
import { AboutUsComponent } from './blog/about-us/about-us.component';
import { SocialMediaLinksComponent } from './blog/social-media-links/social-media-links.component';
import { FormComponent } from './appointment-page/form/form.component';
import { ServicesComponent } from './services/services.component';
import { BookNowComponent } from './services/book-now/book-now.component';
import { CellPhonePatientsComponent } from './services/cell-phone-patients/cell-phone-patients.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FAQsComponent } from './faqs/faqs.component';

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
    SocialMediaLinksComponent,
    PromoComponent,
    AppointmentPageComponent,
    FormComponent,
    ServicesComponent,
    BookNowComponent,
    CellPhonePatientsComponent,
    AccessoriesComponent,
    FAQsComponent,
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
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
