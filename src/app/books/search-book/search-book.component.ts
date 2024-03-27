import { Component } from '@angular/core';
import { BooksServiceService } from '../books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  searchText: string = '';
  books: any[] = [];

  constructor(private booksService: BooksServiceService) {}

  search() {
    this.booksService.searchBooks(this.searchText)
      .subscribe((data: any) => {
        this.books = data.items;
        console.log(data);
      });
  }
}
