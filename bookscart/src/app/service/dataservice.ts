import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { book } from '../core/model/bookmodel';
import { CartProduct } from '../core/model/CartProduct';
import { ReplaySubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();

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
  }
}
