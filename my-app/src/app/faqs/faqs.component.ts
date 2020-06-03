import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent  {

  title: string = "FAQs";

  faqs = 
  [
    {
      question: 'Will I get my phone back the same day ?',
      answer: 'Yes, Doctos iOS returns the damaged device back the same day.Repairs takes between 15-20 minutes !'
    },
   
    {
      question: 'Are any of repairs under warranty?',
      answer: 'Yes, all phones come with a lifetime warranty'
    },
    {
      question: 'Do you repair any other kind of phones, that are not listed on the website?',
      answer: 'We repair most iPhones and iPads. Feel free to give us a call and we will be happy to give you an estimate.'
    },



  ]














}
