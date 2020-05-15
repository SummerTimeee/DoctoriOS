import { Component } from '@angular/core';

@Component({
  selector: 'cell-phone-patients',
  templateUrl: './cell-phone-patients.component.html',
  styleUrls: ['./cell-phone-patients.component.css']
})
export class CellPhonePatientsComponent {

  title = 'Cell Phone Patients'


  phones =
    [
      {
        phoneName: 'iPhone 8+',
        repairPrice: `Repair Price - US $${75.00}`,
        oldRepairPrice: `Repair Price - US ç$${90.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone8-plus-gold-select-2018.jpeg'
      },
      {

        phoneName: 'iPhone 8',
        repairPrice: `Repair Price - US $${70.00}`,
        oldRepairPrice: `Repair Price - US $${85.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone8.jpeg'
      },
      {

        phoneName: 'iPhone 7+',
        repairPrice: `Repair Price - US $${75.00}`,
        oldRepairPrice: `Repair Price - US $${90.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone7plus.jpeg'
      },
      {

        phoneName: 'iPhone 7',
        repairPrice: `Repair Price - US $${70.00}`,
        oldRepairPrice: `Repair Price - US $${85.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone7.jpeg'
      },
      {

        phoneName: 'iPhone 6s+',
        repairPrice: `Repair Price - US $${65.00}`,
        oldRepairPrice: `Repair Price - US $${80.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone 6splus.jpeg'
      },
      {

        phoneName: 'iPhone 6s',
        repairPrice: `Repair Price - US $${60.00}`,
        oldRepairPrice: `Repair Price - US $${75.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone 6s.jpeg'
      },
      {

        phoneName: 'iPhone 6+',
        repairPrice: `Repair Price - US $${65.00}`,
        oldRepairPrice: `Repair Price - US $${80.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone 6plus.jpeg'
      },
      {

        phoneName: 'iPhone 6',
        repairPrice: `Repair Price - US $${55.00}`,
        oldRepairPrice: `Repair Price - US $${70.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone six.jpeg'
      },
      {

        phoneName: 'iPhone SE',
        repairPrice: `Repair Price - US $${50.00}`,
        oldRepairPrice: `Repair Price - US $${65.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphone SE.jpg'
      },
      {

        phoneName: 'iPhone X, XR, XS',
        repairPrice: `Repair Price - US $${135.00}`,
        oldRepairPrice: `Repair Price - US $${165.00}`,
        src: '../../assets/cellphone-images/cellphone-images/iphoneX.jpg'
      },

    ]
}


