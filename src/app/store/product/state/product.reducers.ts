import { Action, createReducer, on } from '@ngrx/store';
import { ProductModel } from '../product.model';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'product';

export interface ProductState {
  items: Partial<ProductModel>[];
  total: number;
  itemDetail: Partial<ProductModel>;
}

export const initialProduct: ProductState = {
  items: [],
  total: 0,
  itemDetail: {
    id: null,
    name: null,
    price: null,
    thumbnailLink: null,
    category: null,
    brand: null,
    description: null,
    images: [],
  },
};

const productReducer = createReducer(
  initialProduct,
  on(ProductActions.saveProductList, (state: ProductState, { items, total }) => {
    return {
      ...state,
      items,
      total,
    };
  }),
  on(ProductActions.saveProductDetail, (state: ProductState, { item }) => {
    return {
      ...state,
      itemDetail: item,
    };
  }),
  on(ProductActions.saveProductListByBrand, (state: ProductState, { items, total }) => {
    return {
      ...state,
      items,
      total,
    };
  }),
  on(ProductActions.saveProductListByCategory, (state: ProductState, { items, total }) => {
    return {
      ...state,
      items,
      total,
    };
  }),
  on(ProductActions.resetProductDetail, (state: ProductState) => {
    return {
      ...state,
      itemDetail: initialProduct.itemDetail,
    };
  }),
);

export function productReducers(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
