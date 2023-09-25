import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { book, cartbook } from '../core/model/bookmodel';
import { CartProduct } from '../core/model/CartProduct';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  filter,
  map,
} from 'rxjs';
import { category } from '../core/model/category';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cartmodel, loginmodel, userDetails } from '../core/model/loginmodel';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  private cartUpdates = new Subject<any>();
  public cartitems$ = this.cartUpdates.asObservable();

  private bookId: number = 0;
  private cartItem: book[] = [];
  cartItems$ = new BehaviorSubject<book[]>(this.cartItem);
  private bookIdSubject = new BehaviorSubject<number>(this.bookId);
  bookId$ = this.bookIdSubject.asObservable();
  private isAuthenticated = false;

  setBookId(bookId: number) {
    this.bookIdSubject.next(bookId);
  }

  updateCartItemQuantity(itemId: number, newQuantity: number) {
    console.log('item quantity updated');
    const itemIndex = this.cartItems.findIndex(
      (item) => item.bookId === itemId
    );
    if (itemIndex !== -1) {
      this.cartItems[itemIndex].qty = newQuantity;
      this.cartUpdates.next(this.cartItems.length.toString());
      this.getTotalValue();
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

  getSimilarBookById = (bookId: number) => {
    return this.http.get<book[]>(
      environment.baseURl + 'Book/GetSimilarBooks/' + bookId
    );
  };

  getBookById = (bookId: number) => {
    return this.http.get<book>(environment.baseURl + 'book/' + bookId);
  };
  cartcount(): number {
    return this.cartItems.reduce((c, t1) => t1.qty + c, 0);
  }
  public cartItems: CartProduct[] = [];

  addItemtocart(userId: string, bookId: number) {
    const cartsmodel: cartmodel = {
      usersId: userId.toString(),
      booksid: bookId,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post(
      environment.baseURl + '/ShoppingCart/AddToCart/',
      cartsmodel,
      {
        headers: headers,
      }
    );
  }

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
    this.openNotification('Product added to cart.');
  }

  public removeProduct(element: book) {
    const itemIndex = this.cartItems.findIndex(
      (item) => item.bookId === element.bookId
    );
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
    }
    this.cartUpdates.next(this.cartItems.length);
    this.openNotification('Product removed from cart.');
  }
  public openNotification(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000, // Display duration in milliseconds
    });
  }

  private selectedCategorySubject = new BehaviorSubject<string | null>(null);

  setSelectedCategory(category: string | null): void {
    this.selectedCategorySubject.next(category);
  }

  getSelectedCategory(): Observable<string | null> {
    return this.selectedCategorySubject.asObservable();
  }
  private priceFilterSubject = new BehaviorSubject<number | null>(null);

  public setPriceFilter(price: number | null): void {
    this.priceFilterSubject.next(price);
  }

  public getPriceFilter(): Observable<number | null> {
    return this.priceFilterSubject.asObservable();
  }

  public setCartPrice(userId: number) {
    return this.http
      .get<any>(environment.baseURl + 'ShoppingCart/' + userId)
      .pipe(map((response) => response));
  }

  login(loginModel: userDetails): Observable<loginmodel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.isAuthenticated = true;
    return this.http.post<loginmodel>(
      environment.baseURl + 'login', // Adjust the URL as needed
      loginModel,
      { headers: headers }
    );
  }

  getUserId(): string | null {
    return sessionStorage.getItem('userId'); // Retrieve from session storage
  }
  logout() {
    this.isAuthenticated = false;
    this.openNotification('Logged Out.');
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getTotalValue() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  }
}
