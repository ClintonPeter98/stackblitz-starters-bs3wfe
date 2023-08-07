import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { book } from '../core/model/bookmodel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBookList = () => {
    return this.http.get<book[]>(environment.baseURl + 'Book');
  };
}
