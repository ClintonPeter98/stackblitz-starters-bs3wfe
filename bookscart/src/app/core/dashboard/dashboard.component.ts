import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { DataService } from '../../service/dataservice';
import { book } from '../model/bookmodel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dataService: DataService, private http: HttpClient) {
    this.getBookList();
  }

  imgBasePath = environment.ImageUrl;
  title = 'Dash Board';
  value = '';
  apiUrl: string = environment.baseURl + 'Book';

  clearValue() {
    this.value = '';
  }
  bookList: book[] = [];
  ngOnInit() {
    console.log('hi');
  }
  getBookList() {
    this.dataService.getBookList().subscribe((res) => {
      if (res.length > 0) {
        this.bookList = res;
      }
      console.log(this.bookList);
    });
  }

  gridColumns = 3;

  public addToCart(element: book) {
    this.dataService.add(element);
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 5 ? 4 : 4;
  }
}
