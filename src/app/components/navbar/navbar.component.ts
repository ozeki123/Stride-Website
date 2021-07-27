import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navLeft', {static: true}) navLeft: ElementRef<HTMLDivElement>;
  @ViewChild('navRight', {static: true}) navRight: ElementRef<HTMLDivElement>;


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.initScrollFadeAnimation()
  }

  initScrollFadeAnimation(): void {
    gsap.from(this.navLeft.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.navLeft.nativeElement,
        toggleClass: 'active',
      },
      delay: 0.3,
      duration: 1.5,
      stagger: -0.6,
      x: -50,
      opacity: 0,
      autoAlpha: 0,
    })

    gsap.from(this.navRight.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.navRight.nativeElement,
        toggleClass: 'active',
      },
      delay: 0.3,
      duration: 1.5,
      stagger: -0.6,
      x: 50,
      opacity: 0,
      autoAlpha: 0,
    })

}
}