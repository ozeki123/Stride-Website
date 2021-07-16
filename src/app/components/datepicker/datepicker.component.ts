import { WeekDay } from '@angular/common';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Day } from './datepicker.model';
import { DatePicker } from './datepicker.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = [];

  constructor(public datePicker: DatePicker, public utilservice: UtilityService) { }

  ngOnInit(): void {
    this.setMonthDays(this.datePicker.getCurrentMonth());

    for(let i = 0; i < 7; i++){
      this.weekDaysName.push(this.datePicker.getWeekDayName(i))
    }
    //For testing
    console.log(this.weekDaysName)
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber  = 1;
      this.year++;
    }

    this.setMonthDays(this.datePicker.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.datePicker.getMonth(this.monthNumber, this.year));
    console.log(this.monthNumber)
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }

}
