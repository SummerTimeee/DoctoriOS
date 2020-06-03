import { Component } from '@angular/core';
import { phones } from '../../phoneData';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'cell-phone-patients',
  templateUrl: './cell-phone-patients.component.html',
  styleUrls: ['./cell-phone-patients.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style(
          {
            letterSpacing: '10px', opacity: 1, color: 'red'
          }
        ),
        animate(5000)
      ])
    ])
  ]
})
export class CellPhonePatientsComponent {

  title = 'Cell Phone Patients';
  phones = phones.phones;

}


