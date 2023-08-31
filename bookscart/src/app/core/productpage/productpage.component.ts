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
      this.handle();
    });
  }
  faStar = faCartShopping;
  bookDetail: any;
  imgBasePath = environment.ImageUrl;

  apiUrl: string = environment.baseURl + 'Book/';
  ngOnInit() {
    this.handle();
  }
  handle() {
    this.dataService.getBookById(this.receivedBookId).subscribe((res) => {
      if (res.bookId > 0) {
        this.bookDetail = res;
      }
    });
  }
  public addToCart(element: book) {
    this.dataService.add(element);
  }
}
