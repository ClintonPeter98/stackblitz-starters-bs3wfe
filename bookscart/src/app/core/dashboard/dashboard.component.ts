import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { DataService } from '../../service/dataservice';
import { book } from '../model/bookmodel';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dataService: DataService, private http: HttpClient) {
    this.getBookList();
  }
  faStar = faCartShopping;

  imgBasePath = environment.ImageUrl;
  title = 'Dash Board';
  value = '';
  apiUrl: string = environment.baseURl + 'Book';

  clearValue() {
    this.value = '';
  }
  bookList: book[] = [];
  selectedCategory: string | null = null;
  ngOnInit() {
    this.dataService.getSelectedCategory().subscribe((category) => {
      this.selectedCategory = category;
      this.updateBookList();
    });
  }
  getBookList() {
    this.dataService.getBookList().subscribe((res) => {
      if (res.length > 0) {
        this.bookList = res;
      }
    });
  }

  gridColumns = 3;

  public addToCart(element: book) {
    this.dataService.add(element);
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 5 ? 4 : 4;
  }

  updateBookList(): void {
    this.dataService.getBookList().subscribe((res) => {
      if (this.selectedCategory) {
        // Filter books based on the selected category
        this.bookList = res.filter(
          (book) => book.category === this.selectedCategory
        );
      } else {
        // If no category is selected, show all books
        this.bookList = res;
      }
    });
  }
}
