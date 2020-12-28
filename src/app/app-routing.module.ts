import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const Approutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'collections',
    loadChildren: () => import('./layout/collections/collections.module').then(m => m.CollectionsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./layout/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '***', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
