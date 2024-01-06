import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authnGuard } from '../../shared/guard/authn.guard';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'quan-ly/san-pham',
    component: ProductComponent,
    title: 'Sản Phẩm',
    data: {
      metadata: {
        pageTitle: 'Sản Phẩm',
      },
    },
    canActivate: [authnGuard],
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
})
export class AdminProductModule {}
