import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-host-banner',
  templateUrl: './host-banner.component.html',
  styleUrls: ['./host-banner.component.scss']
})
export class HostBannerComponent implements OnInit {
  @ViewChild('hostImage', { static: true }) hostImage: ElementRef<HTMLDivElement>;
  @ViewChild('rectangle', { static: true }) rectangle: ElementRef<HTMLDivElement>;
  @ViewChild('hostBanner', { static: true }) HostBanner: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.initScrollFadeAnimation()
  }

  initScrollFadeAnimation(): void {
    gsap.from(this.hostImage.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.hostImage.nativeElement,
        toggleClass: 'active',
      },
      delay: 0.95,
      duration: 1,
      y: 30,
      opacity: 0,
      autoAlpha: 0,
    })

    gsap.from(this.document.querySelector('.rectangle'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.host-banner-container'),
        toggleClass: 'active',
        start: 'top center'
      },
      duration: 1.8,
      x: -60,
      opacity: 0,
      autoAlpha: 0,
    })

    gsap.from(this.document.querySelector('.host-banner-container'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.host-banner-container'),
        toggleClass: 'active',
        start: 'top center'
      },
      duration: 1.8,
      x: -60,
      opacity: 0,
      autoAlpha: 0,
    })

}
}