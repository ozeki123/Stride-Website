import { AotSummaryResolver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stride-website';

  ngOnInit(){
    AOS.init();
  }
}
