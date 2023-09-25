import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { DataService } from '../../service/dataservice';
import { book } from '../model/bookmodel';
import {
  faCircleMinus,
  faCirclePlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  add_circle = faCirclePlus;
  remove_circle = faCircleMinus;
  trash = faTrash;
  title = 'Cart';
  constructor(public cartService: DataService) {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }
  cartimageUrl: string = 'https://www.svgrepo.com/show/18697/sad-face.svg';
  bookList: book[] = [];
  public count: number = 0;
  imgBasePath = environment.ImageUrl;

  cartItems: book[] = [];

  totalPrice = 99;
  elementPrice = 99;
  ngOnInit() {
    this.cartService.cartitems$.subscribe(() => {
      this.count = this.cartService.cartcount();
      this.bookList = this.cartService.cartItems;
      console.log(this.count);
    });
    this.updateTotalPrice();
  }

  updateQuantityIncrease(item: book) {
    this.cartService.updateCartItemQuantity(item.bookId, item.qty++);
  }
  updateQuantitydecrease(item: book) {
    console.log(item.bookId);
    if (item.qty > 1) {
      this.cartService.updateCartItemQuantity(item.bookId, item.qty--);
    }
  }

  getTotalValue() {
    return this.cartService.getTotalValue();
  }

  updateTotalPrice(): void {
    let x: any = [];
    this.cartService.setCartPrice(2493).subscribe({
      next: (res) => console.log(res),
    });
  }

  public removeProduct(element: book) {
    this.cartService.removeProduct(element);
    this.cartService.cartcount();
  }
  public chngQuantity() {
    this.count = this.cartService.cartItems.length;
    console.log(this.count);
  }
  sendBookId(bookId: number): void {
    this.cartService.setBookId(bookId);
  }
}
