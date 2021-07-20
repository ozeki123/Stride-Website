import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '../app/services/data.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatePicker, MonthValue } from './components/datepicker/datepicker.service';
import { CouponBannerComponent } from './components/coupon-banner/coupon-banner.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';

import { UtilityService } from './components/utility.service';
import { CountriesComponent } from './components/countries/countries.component';
import { HostBannerComponent } from './components/host-banner/host-banner.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PopularHostsComponent } from './components/popular-hosts/popular-hosts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InfoBarComponent,
    DatepickerComponent,
    CouponBannerComponent,
    HomeBannerComponent,
    CountriesComponent,
    HostBannerComponent,
    LandingPageComponent,
    PopularHostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [DatePicker, UtilityService, MonthValue],
  bootstrap: [AppComponent]
})
export class AppModule { }
