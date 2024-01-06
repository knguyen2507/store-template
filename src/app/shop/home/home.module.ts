import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'cua-hang',
    component: HomeComponent,
    title: 'Trang Chủ',
    data: {
      metadata: {
        pageTitle: 'Trang Chủ',
      },
    },
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, SharedModule],
})
export class HomeModule {}
