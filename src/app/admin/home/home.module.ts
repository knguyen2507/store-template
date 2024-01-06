import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authnGuard } from '../../shared/guard/authn.guard';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'quan-ly',
    component: HomeComponent,
    title: 'Trang Chủ Quản Lý',
    data: {
      metadata: {
        pageTitle: 'Trang Chủ Quản Lý',
      },
    },
    canActivate: [authnGuard],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forRoot(routes), CommonModule, SharedModule],
})
export class AdminHomeModule {}
