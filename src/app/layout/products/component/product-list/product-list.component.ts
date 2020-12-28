import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products.model';

import { selectProducts } from './../../store/product.selectors';
import { Store, select } from '@ngrx/store'
import * as fromApp from '../../../../app.reducer';
import * as fromProductAction from '../../store/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(){
    this.store.dispatch(fromProductAction.loadProducts());
    this.loadProducts();
  }
  loadProducts(){
    this.products$ = this.store.pipe(select(selectProducts));
  }
  onAddProductToCart(){}
}
