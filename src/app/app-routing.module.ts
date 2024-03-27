import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchBookComponent } from './books/book-search/book-search.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  { path: '', component: SearchBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
