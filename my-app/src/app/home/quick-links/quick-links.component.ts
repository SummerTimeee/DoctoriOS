import { Component } from '@angular/core';

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent {
  Hours: string = 'Hours';
  Weekdays: string = 'Monday - Saturday 9:00 AM - 7:00 PM';
  Phone: string = '(314).669.4292';
  Closed: string = 'Sunday : Closed';
  Services: string = 'SERVICES';
  Book: string = 'BOOK';
  Accessories: string = 'ACCESSORIES';
  Blog: string = "BLOG";
}
