import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap, catchError } from 'rxjs/operators';

import { ProductService } from './../services/productservices.service';
import * as fromProductAction from './product.actions';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductAction.loadProducts),
      mergeMap(action =>
        this.productService.getProducts()
          .pipe(
            map(products => fromProductAction.loadProductsSuccess({ products })),
            catchError((error =>
              of(fromProductAction.loadProductsFailure({ error }))))
          ))
    ));

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductAction.loadProduct),
      mergeMap(action =>
        this.productService.getProduct(action.id)
          .pipe(
            map(product => fromProductAction.loadProductSuccess({ selectedProduct: product })),
            catchError((error) =>
              of(fromProductAction.loadProductFailure({ error })))
          ))
    ))


  constructor(private actions$: Actions,
    private productService: ProductService
  ) { }

}
