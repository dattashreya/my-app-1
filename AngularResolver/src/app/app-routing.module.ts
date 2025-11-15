import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { HomeComponent } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { ProductResolverService } from './services/product-resolver.service';
import { AppComponent } from './app';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'products',
        component: ProductsComponent,
        resolve: { products: ProductResolverService },
    },
    { path: 'about', component: AboutComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes),
    //     BrowserModule,
    // AppRoutingModule,
    // HttpClientModule
    ],
    exports: [RouterModule],
    // declarations: [
    //     AppComponent,
    //     AboutComponent,
    //     HomeComponent,
    //     ProductsComponent]
})
export class AppRoutingModule { }