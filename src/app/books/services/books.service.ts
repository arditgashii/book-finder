import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  // Get API from Google Books to search a book with pagination
  searchBooks(searchText: string, startIndex: number = 0, maxResults: number = 20): Observable<any> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&startIndex=${startIndex}&maxResults=${maxResults}`);
  }

  // Get API from Google Books to get random books(with random index) with pagination
  getRandomBooks(startIndex: number = 0, maxResults: number = 12): Observable<any> {
    const randomIndex = Math.floor(Math.random() * 100); // Generate a random index
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randomIndex}&startIndex=${startIndex}&maxResults=${maxResults}`);
  }

  // Get API from Google Books to get details of a book(with book ID)
  getBookDetails(bookId: string): Observable<any> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  }
}
