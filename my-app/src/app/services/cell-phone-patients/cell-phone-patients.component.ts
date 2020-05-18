import { Component } from '@angular/core';

@Component({
  selector: 'cell-phone-patients',
  templateUrl: './cell-phone-patients.component.html',
  styleUrls: ['./cell-phone-patients.component.css']
})
export class CellPhonePatientsComponent {

  title = 'Cell Phone Patients';

  phones =
    [
      {
        phoneName: 'iPhone 8+',
        repairPrice: `Repair Price - US $${75.00}`,
        oldRepairPrice: `Repair Price - US $${90.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347727972)',
      },
      {

        phoneName: 'iPhone 8',
        repairPrice: `Repair Price - US $${70.00}`,
        oldRepairPrice: `Repair Price - US $${85.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347735544)',
      },
      {

        phoneName: 'iPhone 7+',
        repairPrice: `Repair Price - US $${75.00}`,
        oldRepairPrice: `Repair Price - US $${90.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129)'
      },
      {

        phoneName: 'iPhone 7',
        repairPrice: `Repair Price - US $${70.00}`,
        oldRepairPrice: `Repair Price - US $${85.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712)'
      },
      {

        phoneName: 'iPhone 6s+',
        repairPrice: `Repair Price - US $${65.00}`,
        oldRepairPrice: `Repair Price - US $${80.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430147951)'
      },
      {

        phoneName: 'iPhone 6s',
        repairPrice: `Repair Price - US $${60.00}`,
        oldRepairPrice: `Repair Price - US $${75.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430090682)'
      },
      {

        phoneName: 'iPhone 6+',
        repairPrice: `Repair Price - US $${65.00}`,
        oldRepairPrice: `Repair Price - US $${80.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430173129)'
      },
      {

        phoneName: 'iPhone 6',
        repairPrice: `Repair Price - US $${55.00}`,
        oldRepairPrice: `Repair Price - US $${70.00}`,
        src: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-gold-select-2016?wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712)'
      },
      {

        phoneName: 'iPhone SE',
        repairPrice: `Repair Price - US $${50.00}`,
        oldRepairPrice: `Repair Price - US $${65.00}`,
        src: 'url(https://images-na.ssl-images-amazon.com/images/I/61nFOTQPzEL._SX569_wid=513&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430108712.jpg)'
      },
      {

        phoneName: 'iPhone X, XR, XS',
        repairPrice: `Repair Price - US $${135.00}`,
        oldRepairPrice: `Repair Price - US $${165.00}`,
        src: 'url(https://i.gadgets360cdn.com/products/large/1536782796_635_iphone_xr.jpg',
      
      },
      {

        phoneName: 'iPhone XS Max',
        repairPrice: `Repair Price - US $${185.00}`,
        oldRepairPrice: `Repair Price - US $${200.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphoneXSMax'
      },

    ]
}


