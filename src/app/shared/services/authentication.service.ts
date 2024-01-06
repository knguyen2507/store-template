import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpService: HttpService) {}

  private apiUrl = environment.urlApi;

  SwitchToLoginPage() {
    window.location.href = `${environment.host}/login-page`;
  }

  getDataByAccessToken(): Observable<any> {
    return this.httpService.getAdmin<any>(`${this.apiUrl}/user/verify-access-token`).pipe(
      map((data) => {
        return data;
      }),
    );
  }

  logout() {
    return this.httpService.postAdmin<any>(`${this.apiUrl}/user/logout`);
  }
}
