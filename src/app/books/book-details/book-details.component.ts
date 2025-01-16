import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId: string = '';
  bookDetails: any;

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    // Get book ID from route parameters
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      // Fetch the details of the selected book
      this.fetchBookDetails();
    });
  }

  getLimitedDescription(): string {
    if (this.bookDetails?.description) {
      // Kufizimi i përshkrimit në një gjatësi të caktuar (p.sh. 300 karaktere)
      const maxLength = 300;
      const description = this.bookDetails.description;
      return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
    }
    return 'No summary available for this book';
  }


  fetchBookDetails() {
    this.booksService.getBookDetails(this.bookId)
      .subscribe((data: any) => {
        if (data) {
          this.bookDetails = data.volumeInfo;
        }
      });
  }
}
