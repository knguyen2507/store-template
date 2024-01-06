import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../shared/services/http.service';
import { LoginModel } from './login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpService: HttpService) {}

  private apiUrl = environment.urlApi;

  login(loginInfo: Partial<LoginModel>): Observable<any> {
    return this.httpService.post<any>(`${this.apiUrl}/user/login`, { ...loginInfo }).pipe(
      map((data) => {
        return data;
      }),
    );
  }

  logout(): Observable<void> {
    return this.httpService.post<void>(`${this.apiUrl}/user/logout`).pipe();
  }
}
