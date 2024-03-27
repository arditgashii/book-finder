import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  searchText: string = '';
  books: any[] = [];

  constructor(private booksService: BooksService) {}

  // Display random books in home page
  ngOnInit(): void {
    this.fetchRandomBooks();
  }

  fetchRandomBooks() {
    this.booksService.getRandomBooks()
      .subscribe((data: any) => {
        if (data && data.items && data.items.length > 0) {
          this.books = data.items;
        } else {
          this.fetchRandomBooks();
        }
      });
  }

  // Search function to show results of searching a book
  search() {
    this.booksService.searchBooks(this.searchText)
      .subscribe((data: any) => {
        this.books = data.items || [];
      });
  }
}
