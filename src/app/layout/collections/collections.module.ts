import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CoreModule } from './../../core/core.module';
import { SptrongdiemComponent } from './component/sptrongdiem/sptrongdiem.component';
import { SaleComponent } from './component/sale/sale.component';


@NgModule({
  declarations: [SptrongdiemComponent, SaleComponent],
  imports: [
    CollectionsRoutingModule,
    CoreModule,
    ProductsModule
  ],
  exports:[
    SptrongdiemComponent, SaleComponent
  ]
})
export class CollectionsModule { }
