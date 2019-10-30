import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroToAppFormComponent } from './appointment-page/intro-to-app-form/intro-to-app-form.component';


const routes: Routes =
  [
    {
      path: '',
      component: IntroToAppFormComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
