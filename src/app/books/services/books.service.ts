import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  // Get API from Google Books to search a book
  searchBooks(searchText: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms`);
  }

  // Get API from Google Books to get random books(with random index)
  getRandomBooks(): Observable<any> {
    const randomIndex = Math.floor(Math.random() * 100); // Generate a random index
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randomIndex}`);
  }
}