import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination/pagination.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    PaginationComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent
  ]
})
export class CoreModule { }
