import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, productFeatureKey } from './product.reducers';

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

export const selectProductList = createSelector(selectProductState, (state: ProductState) => {
  return {
    items: state.items,
    total: state.total,
  };
});
export const selectProductDetail = createSelector(selectProductState, (state: ProductState) => state.itemDetail);
