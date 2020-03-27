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
    var box = document.getElementById("box");
    var t = setInterval(move, 10);

    function move() {
      if (pos >= 150) {
        clearInterval(t)
      }
      else {
        pos += 1;
        box.style.left = pos + 'px';
      }
    }
  }

}