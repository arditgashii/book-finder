import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RandomBookComponent } from './books/random-book/random-book.component';
import { SearchBookComponent } from './books/search-book/search-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksServiceService } from './books/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavbarComponent,
    AboutUsComponent,
    RandomBookComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BooksServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
