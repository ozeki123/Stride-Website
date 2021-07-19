import { Injectable } from '@angular/core';
import { Country } from './countries.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CountryService {
    private countriesUrl = 'api/countries/';

    constructor(private http: HttpClient){ }

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.countriesUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        );
    }

    addCountry(country: Country): Observable<Country> {
        country.id = null;
        return this.http.post<Country>(this.countriesUrl, country).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        )
    }
}