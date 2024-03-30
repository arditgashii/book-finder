import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './books/about-us/about-us.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  { path: '', component: BooksComponent },
  { path: 'book-details/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }