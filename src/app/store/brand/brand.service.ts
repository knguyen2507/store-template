import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FindMany, TotalModel } from '../../shared/models/find.many.model';
import { HttpService } from '../../shared/services/http.service';
import { BrandModel } from './brand.model';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private httpService: HttpService) {}

  private apiUrl = environment.urlApi;

  findBrandList() {
    return this.httpService.get<FindMany<BrandModel>>(`${this.apiUrl}/brand/find`);
  }

  findBrandDetail(id: string) {
    return this.httpService.get<BrandModel>(`${this.apiUrl}/brand/detail`, { id });
  }

  findBrandByCode(code: string) {
    return this.httpService.get<BrandModel>(`${this.apiUrl}/brand/find-by-code`, { code });
  }

  getTotalBrand() {
    return this.httpService.getAdmin<TotalModel>(`${this.apiUrl}/brand/get-total-brand`);
  }
}
