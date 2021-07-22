import { Injectable } from '@angular/core';
import { Host } from './hosts.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HostsService {
    private hostsUrl = 'api/hosts/';

    constructor(private http: HttpClient){ }

    getHosts(): Observable<Host[]> {
        return this.http.get<Host[]>(this.hostsUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        );
    }

    addCountry(host: Host): Observable<Host> {
        host.id = null;
        return this.http.post<Host>(this.hostsUrl, host).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        )
    }
}