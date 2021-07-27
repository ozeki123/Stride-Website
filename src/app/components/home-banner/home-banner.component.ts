import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap, Power2, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  @ViewChild('homeText', { static: true }) homeText: ElementRef<HTMLDivElement>;
  @ViewChild('strideText', { static: true }) strideText: ElementRef<HTMLDivElement>;
  @ViewChild('sloganText', { static: true }) sloganText: ElementRef<HTMLDivElement>;
  @ViewChild('infoBar', { static: true }) infoBar: ElementRef<HTMLDivElement>;
  
  infoBarSelector: any = this.document.querySelector('.info-bar-container');
  image: any;
  t1: any;


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
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
      },
      delay: 1.4,
      duration: 1,
      y: -20,
      opacity: 0,
      autoAlpha: 0,
    }) 

    this.t1 = gsap.timeline({
      scrollTrigger: {
        trigger: this.document.querySelector('.info-bar-container'),
        toggleActions: 'restart none none reset'
      }
    });

    this.t1.set(this.document.querySelector('.info-bar-container'), { autoAlpha: 0 });
    this.t1.from(this.document.querySelector('.info-bar-container'), 1.5, {
      xPercent: -5,
      // width: "0%",
      ease: Power4.easeOut,
      delay: 1.85,
      duration: 1.5,
      // y: -40,
      opacity: 0,
      autoAlpha: 1,
    })

    
    
    ;

    }

  }

  // imageRevealAnimation():  void {
  //   this.infoBarSelector.forEach((container) => {
  //     // image = container.querySelector()
  //     this.t1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         toggleActions: 'restart none none reset'
  //       }
  //     });

  //     this.t1.set(container, { autoAlpha: 1 });
  //     this.t1.from(container, 1.5, {
  //       xPercent: -100,
  //       ease: Power2.easeOut
  //     });
      
  //   })
  // }


