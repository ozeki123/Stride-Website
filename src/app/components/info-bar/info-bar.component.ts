import { Component, HostListener, OnInit, Output, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import { UtilityService } from '../utility.service';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { MonthValue } from '../datepicker/datepicker.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {

  inputValue: string = 'Enter destination here';

  constructor(@Inject(UtilityService) public utilservice: UtilityService, public monthvalue: MonthValue) {
   }
  
  ngOnInit(): void {

  }

  clearInput(): void{
    this.inputValue = null;
    
  }

  


  
}
