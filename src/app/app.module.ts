import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [AppRoutingModule, SharedModule, HomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
