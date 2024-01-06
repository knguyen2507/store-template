import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authnGuard } from '../../shared/guard/authn.guard';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'quan-ly/tai-khoan',
    component: UserComponent,
    title: 'Tài Khoản',
    data: {
      metadata: {
        pageTitle: 'Tài Khoản',
      },
    },
    canActivate: [authnGuard],
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
})
export class AdminUserModule {}
