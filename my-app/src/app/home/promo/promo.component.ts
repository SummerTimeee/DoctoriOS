import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})

export class PromoComponent implements OnInit {
  title = 'Deal Of The Month';


  ngOnInit() {

    var text = this.title;
    var splitText = text.split('');
    console.log(splitText)
    for (let i = 0; i < splitText.length; i++) {
      text += "<span>" + splitText[i] + "</span>";

    }



  }


}
