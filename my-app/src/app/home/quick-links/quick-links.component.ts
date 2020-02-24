import { Component} from '@angular/core';

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent  {
  Hours = 'Hours';
  weekdays = 'Monday - Saturday: 9:00 AM - 6:00 PM';
  phone = '(314).669.4292';
  Closed = 'Sunday : CLosed'

  
}
