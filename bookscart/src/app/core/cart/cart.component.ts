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
  constructor(public dataService: DataService) {}
  bookList: book[] = [];
  public count: number = 0;
  imgBasePath = environment.ImageUrl;
  ngOnInit() {
    this.dataService.cartUpdates$.subscribe(() => {
      this.count = this.dataService.cartcount();
      this.bookList = this.dataService.cartItems;
    });
  }
  public removeProduct(element: book) {
    console.log(this.dataService);
    this.dataService.cartItems.splice(
      this.dataService.cartItems.findIndex(
        (element) => element.bookId === element.bookId
      ),
      1
    );
    this.count = this.dataService.cartcount();
  }
  public chngQuantity() {
    this.count = this.dataService.cartcount();
    console.log(this.count);
  }
}
