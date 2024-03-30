import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchText: string = '';
  books: any[] = [];

  constructor(private booksService: BooksService,
              private router: Router) {}

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

  showDetails(book: any) {
    this.router.navigate(['/book-details', book.id]); // Assuming 'id' is the unique identifier for the book
  }
}
