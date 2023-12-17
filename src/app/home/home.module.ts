import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
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
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [],
})
export class HomeModule {}
