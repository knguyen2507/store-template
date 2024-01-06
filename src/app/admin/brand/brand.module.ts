import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authnGuard } from '../../shared/guard/authn.guard';
import { SharedModule } from '../../shared/shared.module';
import { BrandComponent } from './brand.component';

const routes: Routes = [
  {
    path: 'quan-ly/nhan-hang',
    component: BrandComponent,
    title: 'Nhãn Hàng',
    data: {
      metadata: {
        pageTitle: 'Nhãn Hàng',
      },
    },
    canActivate: [authnGuard],
  },
];

@NgModule({
  declarations: [BrandComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
})
export class AdminBrandModule {}
