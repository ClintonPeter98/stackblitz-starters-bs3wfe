import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { DataService } from '../../service/dataservice';
import { book } from '../model/bookmodel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  title = 'Cart';
  constructor(public cartService: DataService) {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }
  bookList: book[] = [];
  public count: number = 0;
  imgBasePath = environment.ImageUrl;

  cartItems: book[] = [];

  updateQuantity(itemId: number) {
    const updatedItem = this.cartItems.find((item) => item.bookId === itemId);
    if (updatedItem) {
      this.cartService.updateCartItemQuantity(itemId, updatedItem.qty);
    }
  }

  ngOnInit() {
    this.cartService.cartitems$.subscribe(() => {
      this.count = this.cartService.cartcount();
      this.bookList = this.cartService.cartItems;
    });
  }
  public removeProduct(element: book) {
    this.cartService.cartcount();

    this.cartService.removeProduct(element);
    console.log(this.cartService.cartcount());
  }
  public chngQuantity() {
    this.count = this.cartService.cartItems.length;
    console.log(this.count);
  }
  sendBookId(bookId: number): void {
    this.cartService.setBookId(bookId);
  }
}
