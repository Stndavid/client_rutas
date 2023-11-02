import { NgModule } from '@angular/core';
import { CommonModule, provideCloudflareLoader } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    NoPagesFoundComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    
    WebRoutingModule
  ]
})
export class WebModule {}
