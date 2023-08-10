import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../service/dataservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faStar = faCartShopping;
  books = faBookOpen;
  title = 'Book Cart';
  count: number = 0;
  countSub: any;
  cartCount: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.countSub = this.dataService.cartUpdates$.subscribe((count) => {
      // this runs everytime the count changes
      this.cartCount = count;
    });

    this.cartCount = this.dataService.cartcount();
  }
}
