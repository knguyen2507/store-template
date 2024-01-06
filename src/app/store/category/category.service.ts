import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FindMany, TotalModel } from '../../shared/models/find.many.model';
import { HttpService } from '../../shared/services/http.service';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpService: HttpService) {}

  private apiUrl = environment.urlApi;

  findCategoryList() {
    return this.httpService.get<FindMany<CategoryModel>>(`${this.apiUrl}/category/find`);
  }

  findCategoryDetail(id: string) {
    return this.httpService.get<CategoryModel>(`${this.apiUrl}/category/detail`, { id });
  }

  findCategoryByCode(code: string) {
    return this.httpService.get<CategoryModel>(`${this.apiUrl}/category/find-by-code`, { code });
  }

  getTotalCategory() {
    return this.httpService.getAdmin<TotalModel>(`${this.apiUrl}/category/get-total-category`);
  }
}
