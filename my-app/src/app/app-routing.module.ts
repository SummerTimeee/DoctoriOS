import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { ServicesComponent } from './services/services.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes =
  [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'book', component: AppointmentPageComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'accessories', component: AccessoriesComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
