import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/products.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectedProduct } from './../../store/product.selectors';
import * as fromApp from '../../../../app.reducer';
import * as fromActionProduct from '../../store/product.actions'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>

  ngOnInit(){
    this.store.dispatch(
      fromActionProduct.loadProduct({ id: this.route.snapshot.paramMap.get("id")}));
      this.product$ = this.store.pipe(select(selectedProduct));

  }



  constructor(private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }


}
