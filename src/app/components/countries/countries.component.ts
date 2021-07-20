import { Component, OnInit } from '@angular/core';
import { Country } from './countries.model';
import { CountryService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries()
  }

  private getCountries() {
    this.countryService.getCountries().subscribe(
                                       countries => this.countries = countries
    );
  }

}
