import { Injectable } from "@angular/core";
import { DatePicker } from "./datepicker/datepicker.service";

@Injectable()
export class UtilityService{

    constructor(private datepicker: DatePicker){}

    public showContainer: boolean = false;
}