import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor(private http: HttpClient) { }

  searchBooks(searchText: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms`);
  }
}