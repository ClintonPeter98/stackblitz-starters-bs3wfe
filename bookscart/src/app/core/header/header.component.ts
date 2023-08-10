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
  cartCount: any;
  constructor(private cartService: DataService) {}

  ngOnInit() {
    // Subscribe to changes in the cart count
    this.cartService.cartitems$.subscribe(() => {
      this.cartCount = this.cartService.cartcount();
    });
  }
}
