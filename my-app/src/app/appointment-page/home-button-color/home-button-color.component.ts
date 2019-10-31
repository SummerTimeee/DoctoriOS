import { Component } from '@angular/core';

@Component({
  selector: 'home-button-color',
  templateUrl: './home-button-color.component.html',
  styleUrls: ['./home-button-color.component.css']
})
export class HomeButtonColorComponent {

  homeButtonColor: string;
  colors: string[] =
    [
      'Black',
      'White'
    ]

}
