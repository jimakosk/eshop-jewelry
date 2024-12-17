import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


export const routes: Routes = [
    { path: 'cart', component: CartComponent }, // Cart page
    { path: 'product/:id', component: ProductDetailsComponent }, // Product detail page
    { path: '', redirectTo: '/cart', pathMatch: 'full' } 
];
