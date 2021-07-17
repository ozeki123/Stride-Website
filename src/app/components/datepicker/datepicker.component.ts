import { WeekDay } from '@angular/common';
import { HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { EventEmitter } from 'stream';
import { UtilityService } from '../utility.service';
import { Day } from './datepicker.model';
import { DatePicker, MonthValue } from './datepicker.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  public monthDays: Day[];

  // public monthNumber: number;
  public year: number;

  public weekDaysName = [];

  // public nextMonthValue: number;

  constructor(public datePicker: DatePicker, public utilservice: UtilityService, public monthvalue: MonthValue) { }

  ngOnInit(): void {
    this.setMonthDays(this.datePicker.getCurrentMonth());

    for(let i = 0; i < 7; i++){
      this.weekDaysName.push(this.datePicker.getWeekDayName(i))
    }
    //For testing
    console.log(this.weekDaysName)

    this.monthvalue.nextMonthValue = this.monthvalue.monthNumber++;
  }

  onNextMonth(): void {
    this.monthvalue.monthNumber++;
    this.monthvalue.nextMonthValue = this.monthvalue.monthNumber++;

    if (this.monthvalue.monthNumber == 13) {
      this.monthvalue.monthNumber  = 1;
      this.year++;
    }

    this.setMonthDays(this.datePicker.getMonth(this.monthvalue.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.monthvalue.monthNumber--;
    this.monthvalue.monthNumber = this.monthvalue.monthNumber -- ;

    this.monthvalue.nextMonthValue--;
    this.monthvalue.nextMonthValue = this.monthvalue.nextMonthValue -- ;


    if (this.monthvalue.monthNumber < 1) {
      this.monthvalue.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.datePicker.getMonth(this.monthvalue.monthNumber, this.year));
    console.log(this.monthvalue.monthNumber)
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthvalue.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }

  

}
