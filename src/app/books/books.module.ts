import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/books.service';
import { AppComponent } from '../app.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { RouterModule } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    BooksComponent,
    BookPageComponent,
    BookDetailsComponent,
    AboutUsComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BooksRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})

export class BooksModule { }
