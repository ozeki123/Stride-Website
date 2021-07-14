import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatePicker } from './components/datepicker/datepicker.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InfoBarComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DatePicker],
  bootstrap: [AppComponent]
})
export class AppModule { }
