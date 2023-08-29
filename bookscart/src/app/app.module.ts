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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
