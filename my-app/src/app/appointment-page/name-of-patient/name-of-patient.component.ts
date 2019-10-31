import { Component } from '@angular/core';

@Component({
  selector: 'name-of-patient',
  templateUrl: './name-of-patient.component.html',
  styleUrls: ['./name-of-patient.component.css']
})
export class NameOfPatientComponent {
  nameOfPatient: string;
  patients: string[] =
    [
      'iPhone SE',
      'iPhone 6',
      'iPhone 6 Plus',
      'iPhone 6s',
      'iPhone 6s Plus',
      'iPhone 7',
      'iPhone 7 Plus',
      'iPhone 8',
      'iPhone 8 Plus',
      'iPhone X',
      'iPhone XR',
      'iPhone XS'
    ]


}
