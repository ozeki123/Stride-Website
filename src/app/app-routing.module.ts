import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HostBannerComponent } from './components/host-banner/host-banner.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PopularHostsComponent } from './components/popular-hosts/popular-hosts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent, children: [
    { path: 'popular-countries', component: CountriesComponent},
    { path: 'host', component: HostBannerComponent},
    { path: 'popular-hosts', component: PopularHostsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }