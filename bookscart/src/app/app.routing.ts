import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CartComponent } from './core/cart/cart.component';
import { AboutComponent } from './core/about/about.component';
import { ProductComponent } from './core/product/product.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProductpageComponent } from './core/productpage/productpage.component';
import { RegisterComponent } from './core/register/register.component';
import { LoginComponent } from './core/login/login.component';
import { LoginFailedComponent } from './core/login-failed/login-failed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'contacts',
    component: ContactComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'productpage',
    component: ProductpageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-failed',
    component: LoginFailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
