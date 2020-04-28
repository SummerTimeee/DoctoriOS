import { Component } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ letterSpacing: '10px' ,opacity: 1 }),
        animate(5000)
      ])
    ])
  ]
})
export class AboutUsComponent {
  title = 'LET US INTRODUCE OURSELVES';
  header = '#1 Afforable Phone Repair Service';
  about = 'About Us';

}
