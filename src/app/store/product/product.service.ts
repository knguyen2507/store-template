import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FindMany } from '../../shared/models/find.many.model';
import { HttpService } from '../../shared/services/http.service';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpService: HttpService) {}

  private apiUrl = environment.urlApi;

  findProductList(pagi?: { offset: number; limit: number }, searchModel?: any) {
    if (searchModel) {
      searchModel = JSON.stringify(searchModel);
    }
    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find`, {
      ...pagi,
      searchModel,
    });
  }

  findProductDetail(id: string) {
    return this.httpService.get<ProductModel>(`${this.apiUrl}/product/detail`, {
      id,
    });
  }

  findProductListByBrand(pagi?: { offset: number; limit: number }, searchModel?: any, id?: string) {
    if (searchModel) {
      searchModel = JSON.stringify(searchModel);
    }
    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find-by-brand`, {
      ...pagi,
      searchModel,
      id,
    });
  }

  findProductListByCategory(pagi?: { offset: number; limit: number }, searchModel?: any, id?: string) {
    if (searchModel) {
      searchModel = JSON.stringify(searchModel);
    }
    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find-by-category`, {
      ...pagi,
      searchModel,
      id,
    });
  }
}
