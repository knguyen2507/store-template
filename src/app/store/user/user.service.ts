import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FindMany, TotalModel } from '../../shared/models/find.many.model';
import { HttpService } from '../../shared/services/http.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  private apiUrl = environment.urlApi;

  findUserList(pagi?: { offset: number; limit: number }) {
    return this.httpService.get<FindMany<UserModel>>(`${this.apiUrl}/user/find`, { ...pagi });
  }

  getTotalUser() {
    return this.httpService.getAdmin<TotalModel>(`${this.apiUrl}/user/get-total-user`);
  }
}
