import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice';
import { HttpClient } from '@angular/common/http';
import { category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(
    public dataService: DataService,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef
  ) {
    this.getcategoryList();
  }
  minPrice = 112;
  maxPrice = 5000;
  selectedPrice = 250;

  activeCategory: string | null = null;
  categoryList: category[] = [];
  getcategoryList() {
    this.dataService.getCategoryList().subscribe((res) => {
      if (res.length > 0) {
        this.categoryList = res;
      }
    });
  }
  setDefaultActiveCategory(defa: number): void {
    this.activeCategory = defa.toString();
    this.getcategoryList();
    this.dataService.setSelectedCategory(null);
  }
  setActiveCategory(category: category): void {
    this.activeCategory = category.categoryName;
    this.dataService.setSelectedCategory(category.categoryName);
  }
  updatePriceFilter(): void {
    console.log(this.selectedPrice);
    this.dataService.setPriceFilter(this.selectedPrice);
  }
}
