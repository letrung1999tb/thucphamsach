import { ProductsModule } from './../layout/products/products.module';
import { PageRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailPageComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ProductsModule

  ],
  exports:[
    HomeComponent,
    ProductDetailPageComponent,
    ShoppingCartPageComponent
  ]
})
export class PagesModule { }
