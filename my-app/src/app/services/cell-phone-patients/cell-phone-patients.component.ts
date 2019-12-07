import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'cell-phone-patients',
  templateUrl: './cell-phone-patients.component.html',
  styleUrls: ['./cell-phone-patients.component.css']
})
export class CellPhonePatientsComponent implements OnInit {

constructor(private sanitizer: DomSanitizer) {}

ngOnInit() {
  this.images = this.imageSources.map((link: string) => this.sanitizer.bypassSecurityTrustResourceUrl(link));
}

title = 'Repairing Services'

  nameOfPatient: string;
  patients: string[] =
    [
      'iPhone SE',
      'iPhone 6',
      'iPhone 6+',
      'iPhone 6s',
      'iPhone 6s+',
      'iPhone 7',
      'iPhone 7+',
      'iPhone 8',
      'iPhone 8+'
    ]


  imageSources: string[] =
    [
      'https://images-na.ssl-images-amazon.com/images/I/61nFOTQPzEL._SX569_.jpg',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129',
      'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430090682',
      'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430147951',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129',
      'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347735544',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347727972'
    ]
    images: Array<SafeResourceUrl>;



    
}


