import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchBookComponent } from './books/book-search/book-search.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  { path: '', component: SearchBookComponent },
  { path: 'book-details/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
