import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.images = this.imageSources.map((link: string) => this.sanitizer.bypassSecurityTrustResourceUrl(link));

    setInterval(() => {
      this.onNext();
    }, 2500)
  }

  imageSources: string[] = [
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D775879029512636%26id%3D100012716381038&width=500',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBDubb2x%2Fposts%2F2264839380494406&width=500',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyae.jones.9%2Fposts%2F2143381925767441&width=500',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBigNisha%2Fposts%2F2505836309464590&width=500',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrianna.everage%2Fposts%2F10158761789294698&width=500',
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fteontae.winters%2Fposts%2F2180003512064768&width=500'
  ];
  selectedImageIndex = 0;
  images: Array<SafeResourceUrl>;

  onNext() {
    if (this.selectedImageIndex + 1 >= this.images.length) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

  onPrevious() {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.images.length - 1;
    } else {
      this.selectedImageIndex--;
    }
  }
}