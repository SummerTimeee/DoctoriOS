import { Component } from '@angular/core';

@Component({
  selector: 'promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})

export class PromoComponent {
  title = 'Deal Of The Month';

  ngOnInit() {

    var pos = 0;
    var slide = document.getElementById("slide");
    var t = setInterval(move, 8);

    function move() {
      if (screen && screen.width > 1000 && pos >= 450 ) {
        clearInterval(t)
      }
      else {
        pos += 1;
        slide.style.left = pos + 'px';
      }
      if (screen && screen.width < 500 && pos >= 90) {
        clearInterval(t)
      }
      else {
        pos += 1;
        slide.style.left = pos + 'px'
      }
    }
  }
}