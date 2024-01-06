import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { ProductService } from '../product.service';
import * as ProductActions from './product.actions';
import { ProductState } from './product.reducers';

@Injectable()
export class ProductEffects {
  constructor(private action$: Actions, private productService: ProductService, private store: Store<ProductState>) {}

  getProductList$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(ProductActions.loadProductList),
        mergeMap((data) => {
          return this.productService
            .findProductList(
              {
                offset: data.offset,
                limit: data.limit,
              },
              data.searchName,
            )
            .pipe(
              map((res) => {
                return this.store.dispatch(ProductActions.saveProductList({ items: res.items, total: res.total }));
              }),
            );
        }),
      );
    },
    { dispatch: false },
  );

  getProductListByAdmin$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(ProductActions.loadProductListByAdmin),
        mergeMap((data) => {
          return this.productService
            .findProductListByAdmin({
              offset: data.offset,
              limit: data.limit,
            })
            .pipe(
              map((res) => {
                return this.store.dispatch(
                  ProductActions.saveProductListByAdmin({ items: res.items, total: res.total }),
                );
              }),
            );
        }),
      );
    },
    { dispatch: false },
  );

  getProductDetail$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(ProductActions.loadProductDetail),
        mergeMap((data) => {
          return this.productService.findProductDetail(data.productCode).pipe(
            map((res) => {
              return this.store.dispatch(ProductActions.saveProductDetail({ item: res }));
            }),
          );
        }),
      );
    },
    { dispatch: false },
  );

  getProductListByBrand$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(ProductActions.loadProductListByBrand),
        mergeMap((data) => {
          return this.productService
            .findProductListByBrand(
              {
                offset: data.offset,
                limit: data.limit,
              },
              data.brandCode,
            )
            .pipe(
              map((res) => {
                return this.store.dispatch(
                  ProductActions.saveProductListByBrand({ items: res.items, total: res.total }),
                );
              }),
            );
        }),
      );
    },
    { dispatch: false },
  );

  getProductListByCategory$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(ProductActions.loadProductListByCategory),
        mergeMap((data) => {
          return this.productService
            .findProductListByCategory(
              {
                offset: data.offset,
                limit: data.limit,
              },
              data.categoryCode,
            )
            .pipe(
              map((res) => {
                return this.store.dispatch(
                  ProductActions.saveProductListByCategory({ items: res.items, total: res.total }),
                );
              }),
            );
        }),
      );
    },
    { dispatch: false },
  );

  getTotalProduct$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(ProductActions.loadTotalProduct),
        mergeMap((data) => {
          return this.productService.getTotalProduct().pipe(
            map((res) => {
              return this.store.dispatch(ProductActions.saveTotalProduct({ total: res.total }));
            }),
          );
        }),
      );
    },
    { dispatch: false },
  );
}
