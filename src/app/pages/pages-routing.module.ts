import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pageRoute: Routes = [
  {path:'',component:HomeComponent},
  {path: 'products/:id', component: ProductDetailPageComponent},
  {path: 'cart', component: ShoppingCartPageComponent}
];


@NgModule({
  imports:[RouterModule.forChild(pageRoute)],
  exports:[RouterModule]
})
export class PageRoutingModule { }
