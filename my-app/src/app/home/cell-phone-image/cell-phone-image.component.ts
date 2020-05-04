import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cell-phone-image',
  templateUrl: './cell-phone-image.component.html',
  styleUrls: ['./cell-phone-image.component.css']
})
export class CellPhoneImageComponent implements OnInit {

  title: string;
  selectedImageIndex = 0;

  ngOnInit() {
    this.title = 'St.Louis Phone Repair';
    this.imagesSource = this.imagesSource;

    setInterval(() => {
      this.onNext();
    }, 2000)
  }

  imagesSource: string[] =
    [
      "../../assets/images/phone-repair.jpg",
      "../../assets/images/phone-repair-img-one.JPG",
      "../../assets/images/phone-repair-img-two.JPG"
    ];



  onNext() {
    if (this.selectedImageIndex + 1 >= this.imagesSource.length) {
      this.selectedImageIndex = 0;
      console.log(this.selectedImageIndex)
    } else {
      this.selectedImageIndex++;
    }
  }

  onPrev() {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.imagesSource.length - 1;
    }
    else {
      this.selectedImageIndex--;
    }
  }
}
















