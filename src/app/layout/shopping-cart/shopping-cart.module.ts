import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingCartItemComponent } from './shoping-cart-item/shoping-cart-item.component';
import { ShopingCartContainerComponent } from './shoping-cart-container/shoping-cart-container.component';


@NgModule({
  declarations: [ShopingCartItemComponent, ShopingCartContainerComponent],
  imports: [
    CommonModule,
  ]
})
export class ShoppingCartModule { }
