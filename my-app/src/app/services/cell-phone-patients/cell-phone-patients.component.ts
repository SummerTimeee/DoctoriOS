import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'cell-phone-patients',
  templateUrl: './cell-phone-patients.component.html',
  styleUrls: ['./cell-phone-patients.component.css']
})
export class CellPhonePatientsComponent {
  phones: any[] = [
    // {
    //   'phoneName': 'iPhone 8+',
    //   'repairPrice': `$${75.00}`,
    //   'oldRepairPrice': `$${90.00}`,
    //   'image': 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347727972)'
    // },
    // {

    //   'phoneName': 'iPhone 8',
    //   'repairPrice': `$${70.00}`,
    //   'oldRepairPrice': `$${85.00}`,
    //   'image': 'url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347735544)'
    // },
    {
      phoneName: 'iPhone 7+',
      repairPrice: 75.00,
      oldRepairPrice: 90.00,
      image: 'url(https://image.shutterstock.com/image-photo/peach-isolated-on-white-full-260nw-669280930.jpg)'

    }







  ];

}


