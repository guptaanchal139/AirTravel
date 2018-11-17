import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DisplayContainerComponent } from './components/display-container/display-container.component';
import { ErrorCardComponent } from './components/error-card/error-card.component';
import { FlightInfoBoxComponent } from './components/flight-info-box/flight-info-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageAdsComponent } from './components/image-ads/image-ads.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchTabComponent } from './components/search-tab/search-tab.component';
import { OrderByPipe } from './custom-pipes/order-by.pipe';
import { RefineByPricePipe } from './custom-pipes/refine-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContainerComponent,
    ErrorCardComponent,
    FlightInfoBoxComponent,
    FooterComponent,
    HeaderComponent,
    ImageAdsComponent,
    LoaderComponent,
    SearchTabComponent,
    OrderByPipe,
    RefineByPricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
