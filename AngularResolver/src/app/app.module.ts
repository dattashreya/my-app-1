import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app';

import { AboutComponent } from './components/about/about';
import { HomeComponent } from './components/home/home';
import { ProductsComponent } from './components/products/products';

import { ProductResolverService } from './services/product-resolver.service';

import { ProductService } from './services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // AppComponent,
    // AboutComponent,
    // HomeComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductResolverService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }