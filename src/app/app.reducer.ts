// import { reducer, reducers } from './app.reducer';

import { ActionReducerMap } from '@ngrx/store';

import * as fromProduct from './layout/products/store/product.reducer'


export interface AppState {
  product: fromProduct.ProductState
};

export const reducers: ActionReducerMap<AppState> = {
  product: fromProduct.productReducer
}

