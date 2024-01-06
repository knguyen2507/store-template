import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FindMany, TotalModel } from '../../shared/models/find.many.model';
import { HttpService } from '../../shared/services/http.service';
import { ProductDetailModel, ProductModel, ProductModelFindByAdmin } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpService: HttpService) {}

  private apiUrl = environment.urlApi;

  findProductList(pagi?: { offset: number; limit: number }, searchName?: string) {
    let payload: any = pagi;
    if (searchName) {
      payload = {
        ...pagi,
        searchName,
      };
    }

    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find`, payload);
  }

  findProductListByAdmin(pagi?: { offset: number; limit: number }) {
    return this.httpService.get<FindMany<ProductModelFindByAdmin>>(`${this.apiUrl}/product/admin/find`, { ...pagi });
  }

  findProductDetail(productCode: string) {
    return this.httpService.get<ProductDetailModel>(`${this.apiUrl}/product/detail`, {
      productCode,
    });
  }

  findProductListByBrand(pagi?: { offset: number; limit: number }, brandCode?: string) {
    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find-by-brand`, {
      ...pagi,
      brandCode,
    });
  }

  findProductListByCategory(pagi?: { offset: number; limit: number }, categoryCode?: string) {
    return this.httpService.get<FindMany<ProductModel>>(`${this.apiUrl}/product/find-by-category`, {
      ...pagi,
      categoryCode,
    });
  }

  getTotalProduct() {
    return this.httpService.getAdmin<TotalModel>(`${this.apiUrl}/product/get-total-product`);
  }
}
