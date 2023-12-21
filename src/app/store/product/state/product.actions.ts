import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../product.model';

const LOAD_PRODUCT_LIST_ACTION = '[Product] Load Product List';
const SAVE_PRODUCT_LIST_ACTION = '[Product] Save Product List';
const LOAD_PRODUCT_LIST_BY_BRAND_ACTION = '[Product] Load Product List By Brand';
const SAVE_PRODUCT_LIST_BY_BRAND_ACTION = '[Product] Save Product List By Brand';
const LOAD_PRODUCT_LIST_BY_CATEGORY_ACTION = '[Product] Load Product List By Category';
const SAVE_PRODUCT_LIST_BY_CATEGORY_ACTION = '[Product] Save Product List By Category';
const LOAD_PRODUCT_DETAIL_ACTION = '[Product] Load Product Detail';
const SAVE_PRODUCT_DETAIL_ACTION = '[Product] Save Product Detail';
const RESET_PRODUCT_DETAIL_ACTION = '[Product] Reset Product Detail';

export const loadProductList = createAction(
  LOAD_PRODUCT_LIST_ACTION,
  props<{ searchModel?: any; offset: number; limit: number }>(),
);
export const saveProductList = createAction(
  SAVE_PRODUCT_LIST_ACTION,
  props<{ items: ProductModel[]; total: number }>(),
);

export const loadProductListByBrand = createAction(
  LOAD_PRODUCT_LIST_BY_BRAND_ACTION,
  props<{ searchModel?: any; offset: number; limit: number; brandId: string }>(),
);
export const saveProductListByBrand = createAction(
  SAVE_PRODUCT_LIST_BY_BRAND_ACTION,
  props<{ items: ProductModel[]; total: number }>(),
);

export const loadProductListByCategory = createAction(
  LOAD_PRODUCT_LIST_BY_CATEGORY_ACTION,
  props<{ searchModel?: any; offset: number; limit: number; categoryId: string }>(),
);
export const saveProductListByCategory = createAction(
  SAVE_PRODUCT_LIST_BY_CATEGORY_ACTION,
  props<{ items: ProductModel[]; total: number }>(),
);

export const loadProductDetail = createAction(LOAD_PRODUCT_DETAIL_ACTION, props<{ id: string }>());
export const saveProductDetail = createAction(SAVE_PRODUCT_DETAIL_ACTION, props<{ item: ProductModel }>());

export const resetProductDetail = createAction(RESET_PRODUCT_DETAIL_ACTION);
