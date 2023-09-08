import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Subscription, delay } from 'rxjs';
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
  loading: boolean = true;

  apiUrl: string = environment.baseURl + 'Book/';
  ngOnInit() {
    this.handle();
  }
  handle() {
    this.dataService.getBookById(this.receivedBookId).subscribe(
      (res) => {
        if (res.bookId > 0) {
          this.bookDetail = res;
          delay(1000);
          this.loading = false;
        }
      },
      (error) => {
        // Handle error
        this.loading = false;
      }
    );
  }
  public addToCart(element: book) {
    this.dataService.add(element);
  }
}
