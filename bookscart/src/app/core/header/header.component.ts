import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../service/dataservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faStar = faCartShopping;
  wishlist =faHeart;
  books = faBookOpen;
  title = 'Book Cart';
  cartCount: any;
  constructor(public authService: DataService) {}

  ngOnInit() {
    // Subscribe to changes in the cart count
    this.authService.cartitems$.subscribe(() => {
      this.cartCount = this.authService.cartcount();
    });
    sessionStorage.removeItem('userId');
  }

  logout() {
    this.authService.logout();
    sessionStorage.removeItem('userId');
  }
}
