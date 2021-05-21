import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { SwiperComponent } from './pages/components/swiper/swiper.component';
import { ProductItemComponent } from './pages/components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    SwiperComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
