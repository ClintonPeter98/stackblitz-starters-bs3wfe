import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CartComponent } from './core/cart/cart.component';
import { AboutComponent } from './core/about/about.component';
import { ProductComponent } from './core/product/product.component';
import { ContactComponent } from './core/contact/contact.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
