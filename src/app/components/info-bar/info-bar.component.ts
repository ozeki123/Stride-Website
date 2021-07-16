import { Component, HostListener, OnInit, Output, Inject } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {

  constructor(@Inject(UtilityService) public utilservice: UtilityService) {
   }
  
  ngOnInit(): void {
  }

  


  
}
