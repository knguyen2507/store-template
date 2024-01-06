import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../shared/services/authentication.service';
import * as AppStore from '../../store/index.store';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class AdminNavigationComponent implements OnInit {
  product = 'san-pham';
  brand = 'nhan-hang';
  category = 'danh-muc';
  user = 'tai-khoan';
  constructor(
    private readonly authService: AuthenticationService,
    private productStore: Store<AppStore.ProductStore.ProductReducers.ProductState>,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.setItem();
    });
  }

  setItem() {}

  onClick() {
    window.location.href = environment.host;
  }

  shop_page() {
    window.location.href = `${environment.host}/cua-hang`;
  }

  redirect_page(item: string) {
    window.location.href = `${environment.host}/admin/${item}`;
  }

  onActionClick(url: string, type: string) {
    if (type === 'brand') this.productStore.dispatch(AppStore.ProductStore.ProductActions.resetProductListByBrand());
    if (type === 'category')
      this.productStore.dispatch(AppStore.ProductStore.ProductActions.resetProductListByCategory());
    window.location.href = `${environment.host}${url}`;
  }

  logout() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.authService.logout().subscribe();
    }
    window.location.href = `${environment.host}/login-page`;
    localStorage.removeItem(`accessToken`);
  }
}
