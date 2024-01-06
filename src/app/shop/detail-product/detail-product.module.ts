import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DetailProductComponent } from './detail-product.component';

const routes: Routes = [
  {
    path: 'cua-hang/san-pham/chi-tiet/:productCode',
    component: DetailProductComponent,
    title: 'Chi Tiết Sản Phẩm',
    data: {
      metadata: {
        pageTitle: 'Chi Tiết Sản Phẩm',
      },
    },
  },
];

@NgModule({
  declarations: [DetailProductComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
})
export class DetailProductModule {}
