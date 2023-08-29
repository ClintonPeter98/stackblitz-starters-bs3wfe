import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { book } from '../core/model/bookmodel';
import { CartProduct } from '../core/model/CartProduct';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { category } from '../core/model/category';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private cartUpdates = new Subject<any>();
  public cartitems$ = this.cartUpdates.asObservable();

  private cartItem: book[] = [];
  cartItems$ = new BehaviorSubject<book[]>(this.cartItem);

  // ... other methods to update cart items ...

  updateCartItemQuantity(itemId: number, newQuantity: number) {
    const itemIndex = this.cartItems.findIndex(
      (item) => item.bookId === itemId
    );

    if (itemIndex !== -1) {
      this.cartItems[itemIndex].qty = newQuantity;
      this.cartItems$.next(this.cartItems);
    }
  }
  getCategoryList = () => {
    return this.http.get<category[]>(
      environment.baseURl + 'Book/GetCategoriesList'
    );
  };

  getBookList = () => {
    return this.http.get<book[]>(environment.baseURl + 'Book');
  };
  cartcount(): number {
    return this.cartItems.reduce((c, t1) => t1.qty + c, 0);
  }
  public cartItems: CartProduct[] = [];
  add(product: book) {
    console.log('item added to cart.!');
    let item: CartProduct = this.cartItems.find(
      (item) => item.bookId == product.bookId
    ) as CartProduct;

    if (item) {
      item.qty++;
    } else {
      (product as CartProduct).qty = 1;
      this.cartItems.push(product);
    }
    this.cartUpdates.next(this.cartItems.length.toString());
    alert('item added to cart');
  }

  public removeProduct(element: book) {
    this.cartItems.splice(
      this.cartItems.findIndex((element) => element.bookId === element.bookId),
      1
    );
    this.cartUpdates.next(this.cartItems.length);
    alert('item removed from cart');
  }
}
