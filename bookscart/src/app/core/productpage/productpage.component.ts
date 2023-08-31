import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Subscription } from 'rxjs';
import { book } from '../model/bookmodel';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss'],
})
export class ProductpageComponent implements OnInit {
  receivedBookId: number = 0;
  private subscription: Subscription;

  constructor(public dataService: DataService, private http: HttpClient) {
    this.subscription = this.dataService.bookId$.subscribe((bookId) => {
      this.receivedBookId = bookId;
      console.log('book id recived in product page');
      this.handle();
    });
  }
  faStar = faCartShopping;
  bookDetail: any;
  imgBasePath = environment.ImageUrl;

  apiUrl: string = environment.baseURl + 'Book/';
  ngOnInit() {
    this.dataService.getBookById(this.receivedBookId).subscribe((res) => {
      if (res.bookId > 0) {
        this.bookDetail = res;
      }
    });
  }
  handle() {
    console.log('recived onchange');
    console.log(this.receivedBookId);
    this.dataService.getBookById(this.receivedBookId).subscribe((res) => {
      if (res.bookId > 0) {
        this.bookDetail = res;
        console.log(this.bookDetail);
      }
    });
  }
  public addToCart(element: book) {
    this.dataService.add(element);
  }
}
