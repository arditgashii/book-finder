import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RandomBookComponent } from './books/random-book/random-book.component';
import { SearchBookComponent } from './books/search-book/search-book.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
