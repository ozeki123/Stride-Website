import { Component, HostListener, Inject, OnInit, QueryList, ViewChild, ViewChildren, ɵɵsetComponentScope } from '@angular/core';
import { Country } from './countries.model';
import { CountryService } from './countries.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  animations: []
})
export class CountriesComponent implements OnInit {

  countries: Country[];

  @ViewChild('textFirst', { static: true }) textFirst: ElementRef<HTMLDivElement>;
  @ViewChild('textSecond', { static: true }) textSecond: ElementRef<HTMLDivElement>;
  @ViewChild('countryMarker', { static: true }) countryMarker: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document, private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries()
    this.initScrollFadeAnimation()
  }

  private getCountries() {
    this.countryService.getCountries().subscribe(
                                       countries => this.countries = countries
    );
  }

  initScrollFadeAnimation(): void {
    gsap.utils.toArray('.pop-dest-container').forEach(section => {
      gsap.from(this.document.querySelectorAll('.textFirst, .textSecond'), {
        scrollTrigger: section,
        autoAlpha: 0,
        y: 25,
        duration:1.1,
        stagger:0.25,
        opacity: 0,
        toggleClass: 'active'
      })

    });

 

    // gsap.from(this.document.querySelector('#countryText'), {
    //   scrollTrigger: {
    //     trigger:  this.document.querySelector('#countryText'),
    //     toggleClass: 'active'
    //   },
    //   autoAlpha: 0,
    //   y: 25,
    //   duration:1.1,
    //   stagger:0.25,
    //   opacity: 0,
    //   toggleClass: 'active'
    // });
    
}

}
