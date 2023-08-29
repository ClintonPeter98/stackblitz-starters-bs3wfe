import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice';
import { HttpClient } from '@angular/common/http';
import { category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(public dataService: DataService, private http: HttpClient) {
    this.getcategoryList();
  }
  categoryList: category[] = [];
  ngOnInit() {
    console.log('hi from category list');
  }
  getcategoryList() {
    this.dataService.getCategoryList().subscribe((res) => {
      if (res.length > 0) {
        this.categoryList = res;
      }
      // console.log(this.categoryList);
    });
  }
}
