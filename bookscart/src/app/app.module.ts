import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CartComponent } from './core/cart/cart.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './core/about/about.component';
import { ProductComponent } from './core/product/product.component';
import { ContactComponent } from './core/contact/contact.component';
import { AppRoutingModule } from './app.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CategoryComponent } from './core/category/category.component';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { ProductpageComponent } from './core/productpage/productpage.component';
import { SimilarbooksComponent } from './core/similarbooks/similarbooks.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    CategoryComponent,
    ProductpageComponent,
    SimilarbooksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatTooltipModule,
    MatListModule,
    MatSnackBarModule,
    MatSliderModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
