import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({ fontSize: 1, opacity: 0 })),

      transition('void => *', [
        animate(2000),
      ]),


    ])
  ]
})

export class PromoComponent {
  title = 'Deal Of The Month';
}
