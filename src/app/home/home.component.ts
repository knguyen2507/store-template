import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as AppStore from '../store/index.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppStore.ProductStore.ProductReducers.ProductState>) {}

  data = [
    { title: 'Test 1', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 001' },
    { title: 'Test 2', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 002' },
    { title: 'Test 3', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 003' },
    { title: 'Test 4', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 004' },
    { title: 'Test 5', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 005' },
    { title: 'Test 6', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 006' },
    { title: 'Test 7', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 007' },
    { title: 'Test 8', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Product Test 008' },
  ];
  searchModel: any = {};
  appMode = environment.mode;

  rowData: Partial<AppStore.ProductStore.ProductModel>[];
  total = 0;
  pagi: Partial<AppStore.ParameterStore.ParameterPagiModel>;

  ngOnInit(): void {
    setTimeout(() => {
      this.getList();
    }, 0);
  }

  getList() {
    this.store.select(AppStore.ParameterStore.parameterSelectors.selectPagi).subscribe((data) => {
      this.pagi = data;
    });
    this.store.dispatch(
      AppStore.ProductStore.ProductActions.loadProductList({
        offset: this.pagi.offset ? this.pagi.offset : 0,
        limit: this.pagi.limit ? this.pagi.limit : 8,
        searchModel: this.searchModel,
      }),
    );
    this.store.select(AppStore.ProductStore.ProductSelectors.selectProductList).subscribe((data) => {
      this.rowData = data.items;
      this.total = data.total;
    });
  }

  onPaginatorChanged() {
    this.getList();
  }
}
