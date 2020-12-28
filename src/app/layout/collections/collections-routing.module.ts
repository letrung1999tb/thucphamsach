import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SptrongdiemComponent } from './component/sptrongdiem/sptrongdiem.component';
import { SaleComponent } from './component/sale/sale.component';
import { ReviewComponent } from './../../core/review/review.component';

const collectionsRoutes: Routes = [
  {
    path: '',
    component: ReviewComponent,
    children: [
      {
        path:'san-pham-trong-diem',
        component:SptrongdiemComponent
      },
      {
        path:'sale',
        component:SaleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(collectionsRoutes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
