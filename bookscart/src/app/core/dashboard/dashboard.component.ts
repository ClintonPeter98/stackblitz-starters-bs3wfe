import { Component, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  imgSrc = 'https://picsum.photos/200/300';
  title = 'Dash Board';
  value = '';
  clearValue() {
    this.value = '';
  }

  OnClick() {
    alert('The dog is akito');
  }
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 5 ? 4 : 4;
  }
  ngOnDestroy() {
    console.log('destroyed');
    alert('page is destroyed');
  }
}
