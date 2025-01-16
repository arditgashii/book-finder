import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  searchText: string = '';
  books: any[] = [];
  currentPage: number = 0;
  showPagination: boolean = false; // Flag to control pagination visibility
  showSearchText: boolean = false; // Flag to control visibility of search text

  constructor(private booksService: BooksService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Scroll to top when the component initializes
    this.scrollToTop();

    // Check if there is a query parameter 'page' in the URL
    this.route.queryParams.subscribe(params => {
      const page = params['page'];
      if (page) {
        this.currentPage = parseInt(page);
      } else {
        this.currentPage = 0; // Default to first page if no query parameter is present
      }
      // Fetch books based on the current page and search text
      if (this.searchText !== '') {
        this.search();
      } else {
        this.fetchRandomBooks();
      }
    });
  }

  fetchRandomBooks() {
    this.booksService.getRandomBooks()
      .subscribe((data: any) => {
        if (data && data.items && data.items.length > 0) {
          this.books = data.items;
          this.showPagination = false; // Hide pagination when fetching random books
        } else {
          this.fetchRandomBooks();
        }
      });
  }

  // Search function to show results of searching a book
  search() {
    const startIndex = this.currentPage * 20; // Calculate start index based on current page
    this.booksService.searchBooks(this.searchText, startIndex)
      .subscribe((data: any) => {
        this.books = data.items || [];
        this.showSearchText = true; // Show search text after search
        this.showPagination = true; // Show pagination after search
      });
    // Update the URL with the searched text and page number
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchText, page: this.currentPage }
    });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    // Fetch books based on the new page and search text
    if (this.searchText !== '') {
      this.search();
    } else {
      this.fetchRandomBooks();
    }
    // Scroll to top when changing page
    this.scrollToTop();
  }

  showDetails(book: any) {
    this.router.navigate(['/book-details', book.id]); // Assuming 'id' is the unique identifier for the book
  }

  // Function to scroll to the top of the page
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
