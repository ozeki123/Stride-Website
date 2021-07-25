import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  t1 = gsap.timeline();

  @ViewChild('homeText', { static: true }) homeText: ElementRef<HTMLDivElement>;
  @ViewChild('strideText', { static: true }) strideText: ElementRef<HTMLDivElement>;
  @ViewChild('sloganText', { static: true }) sloganText: ElementRef<HTMLDivElement>;
  @ViewChild('infoBar', { static: true }) infoBar: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.initScrollFadeAnimation()
  }

  initScrollFadeAnimation(): void {
    gsap.from(this.homeText.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.homeText.nativeElement,
        toggleClass: 'active',
      },
      duration: 2,
      stagger: -0.8,
      y: -50,
      opacity: 0,
      autoAlpha: 0,
    })

    gsap.from(this.document.querySelector('p'), {
      scrollTrigger: {
        trigger: this.document.querySelector('p'),
        toggleClass: 'active',
        markers: true,
      },
      delay: 1.4,
      duration: 1,
      y: -20,
      opacity: 0,
      autoAlpha: 0,
    }) 

    gsap.from(this.document.querySelector('.info-bar-container'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-bar-container'),
        toggleClass: 'active',
      },
      delay: 2,
      duration: 1.3,
      y: -40,
      opacity: 0,
      autoAlpha: 0,
    }) 
    
    ;

    }

  }

  


