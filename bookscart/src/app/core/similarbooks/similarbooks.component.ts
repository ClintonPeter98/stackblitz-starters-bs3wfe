import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../../service/dataservice';
import { HttpClient } from '@angular/common/http';
import { book } from '../model/bookmodel';
import { environment } from '../../../environments/environment.development';
import { Subscription } from 'rxjs';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-similarbooks',
  templateUrl: './similarbooks.component.html',
  styleUrls: ['./similarbooks.component.scss'],
})
export class SimilarbooksComponent implements OnInit {
  receivedBookId: number = 0;
  private subscription: Subscription;
  constructor(public dataService: DataService, private http: HttpClient) {
    this.subscription = this.dataService.bookId$.subscribe((bookId) => {
      this.receivedBookId = bookId;
    });
  }
  faStar = faCartShopping;
  bookList: book[] = [];
  imgBasePath = environment.ImageUrl;
  title = 'Dash Board';
  ngOnInit(): void {
    this.dataService
      .getSimilarBookById(this.receivedBookId)
      .subscribe((res) => {
        if (res.length > 0) {
          this.bookList = res;
        }
      });
  }
  public addToCart(element: book) {
    this.dataService.add(element);
  }
  @Output() bookIdClicked = new EventEmitter<string>();

  sendBookId(bookId: number): void {
    this.bookIdClicked.emit(bookId.toString());
    this.dataService.setBookId(bookId);
  }
}
