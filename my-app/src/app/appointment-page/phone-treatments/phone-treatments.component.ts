import { Component } from '@angular/core';

@Component({
  selector: 'phone-treatments',
  templateUrl: './phone-treatments.component.html',
  styleUrls: ['./phone-treatments.component.css']
})
export class PhoneTreatmentsComponent {
  phoneTreatments: string;
  treatments: string[] =
    [
      'Cracked Screen',
      'Cracked Camera',
      'Missing Home button',
      'Water damage'
    ]
}
