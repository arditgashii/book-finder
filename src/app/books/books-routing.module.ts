import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';
import { BookPageComponent } from './book-page/book-page.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path: '', component: BooksComponent, children: [
      { path: '', component: BookPageComponent },
      { path: 'book-details/:id', component: BookDetailsComponent },
      { path: 'about-us', component: AboutUsComponent }
    ]
  }
];

export const BooksRoutingModule = RouterModule.forChild(routes);