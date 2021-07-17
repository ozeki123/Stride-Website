import { Component, HostListener, OnInit, Output, Inject, Input, ViewChild } from '@angular/core';
import { UtilityService } from '../utility.service';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {

  // @ViewChild('datepickercomponent', { static: false}) datepickercomponent: DatepickerComponent;
  // nextMonthValue(): number{
  //   return this.datepickercomponent.monthNumber;
  //   console.log(this.datepickercomponent.monthNumber);
  // }

  constructor(@Inject(UtilityService) public utilservice: UtilityService) {
   }
  
  ngOnInit(): void {

  }

  


  
}
