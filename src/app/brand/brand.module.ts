import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrandComponent } from './brand.component';

const routes: Routes = [
  {
    path: 'brand/:brandName',
    component: BrandComponent,
    title: 'Nhãn Hàng',
    data: {
      metadata: {
        pageTitle: 'Nhãn Hàng',
      },
    },
  },
];

@NgModule({
  declarations: [BrandComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
})
export class BrandModule {}
