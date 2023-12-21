import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandModule } from './brand/brand.module';
import { HomeModule } from './home/home.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [AppRoutingModule, SharedModule, HomeModule, BrandModule, AppStoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
