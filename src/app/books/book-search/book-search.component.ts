import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class SearchBookComponent implements OnInit {
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
