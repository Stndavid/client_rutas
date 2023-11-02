import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { WebRoutingModule } from './web/web-routing.module';
import { HomeComponent } from './home/home.component';
import { NoPagesFoundComponent } from './web/no-pages-found/no-pages-found.component';
import { AuthModule } from './auth/auth.module';
import { WebModule } from './web/web.module';
// import { HomeComponent } from './home/home.component';
// import { SharedModule } from './shared/shared.module';
// import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
// import { AuthModule } from './auth/auth.module';
// import { WebModule } from './web/web.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, WebModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
