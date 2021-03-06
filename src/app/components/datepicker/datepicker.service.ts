import { Injectable } from '@angular/core';
import { Day } from './datepicker.model';

@Injectable()
export class DatePicker {
    private currentYear: number;
    private currentMonthIndex: number;

    constructor() {
        let date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonthIndex = date.getMonth();
    }

    public getCurrentMonth(): Day[] {
        return this.getMonth(this.currentMonthIndex, this.currentYear)
    }

    public getMonth(monthIndex: number, year: number): Day[]{
        let days = [];

        let firstday = this.createDay(1, monthIndex, year);

        for (let i = 1; i < firstday.weekDayNumber; i++) {
            days.push({
                weekDayNumber: i,
                monthIndex: monthIndex,
                year: year,
            } as Day);
        }
        days.push(firstday);

        let countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        for (let i = 2; i < countDaysInMonth +1; i++) {
            days.push(this.createDay(i, monthIndex, year));
        }

        return days;
    }

    public getMonthName(monthIndex: number): string {
        switch (monthIndex) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
            
            default: 
                return '';
        }

    }

    public getWeekDayName(weekDay: number): string {
        switch (weekDay) {
            case 0:
                return 'Su';
            case 1:
                return 'Mo';
            case 2:
                return 'Tu';
            case 3:
                return 'We';
            case 4:
                return 'Th';
            case 5:
                return 'Fr';
            case 6:
                return 'Sa';

            default:
                return '';
        }
    }

    private createDay(dayNumber: number, monthIndex: number, year: number){
        let day = new Day();

        day.monthIndex = monthIndex;
        day.month = this.getMonthName(monthIndex);

        day.number = dayNumber;
        day.year = this.currentYear; 

        day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
        day.weekDayName = this.getWeekDayName(day.weekDayNumber)

        return day
    }

}

@Injectable()
export class MonthValue {
    public monthNumber: number;
    public nextMonthValue: number;
    public year: number;
    public monthDays: Day[];

    constructor(public datepicker: DatePicker){
        this.setMonthDays(this.datepicker.getCurrentMonth());
        this.nextMonthValue = this.monthNumber++;
    }

    onNextMonth(): void {
        this.monthNumber++;
    
        if (this.monthNumber == 13) {
          this.monthNumber  = 1;
          this.year++;
        }
    
        this.setMonthDays(this.datepicker.getMonth(this.monthNumber, this.year));
      }
    
    private setMonthDays(days: Day[]): void {
        this.monthDays = days;
        this.monthNumber = this.monthDays[0].monthIndex;
        this.year = this.monthDays[0].year;
    }
}