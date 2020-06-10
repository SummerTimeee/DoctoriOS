import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent {

  title: string = "FAQs";

  faqs =
    [
      {
        question: 'Do you provide any other services that are not listed on the website?',
        answer: 'In addition to cell phone repair, for most devices we specialize in : Battery Replacements, Camera Replacements, Charger Ports & more!'
      },
      {
        question: 'Will I get my phone back the same day?',
        answer: 'Yes, upon availability Doctos iOS returns the damaged device back the same day like new. Repairs takes between 15-20 minutes !'
      },
      {
        question: 'Does Doctor iOS come to me?',
        answer: 'Get low-cost phone repair right at your door step because we even come to you.'
      },

      {
        question: 'Are your parts and tools under warranty?',
        answer: 'Yes, all phones come with a lifetime warranty. The warranty does not cover issues caused by physical or liquid damage.'
      },
      {
        question: 'Does Doctor iOS unlock and sell phones?',
        answer: 'No we do not unlock or sell phones.'
      },

      {
        question: 'Do you repair any other kind of phones, that are not listed on the website?',
        answer: 'No sorry, iOS devices only.'
      },
      {
        question: 'Do I need to make an appointment to bring my device in for a repair?',
        answer: 'Yes, appointments are necessary for iPhones and iPads, based upon part availability.'
      },
      {
        question: 'Does Doctor iOS sell parts or tools?',
        answer: 'Doctor iOS does not sell parts or tools seperately from services.'
      }



    ]














}
