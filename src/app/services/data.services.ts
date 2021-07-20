import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      countries: [
        {
          id: 1,
          name: 'America',
          homes: 62,
          price: '$40'
        },
        {
          id: 2,
          name: 'France',
          homes: 27,
          price: '$80'
        },
        {
          id: 3,
          name: 'Japan',
          homes: 21,
          price: '$30'
        },
        {
          id: 4,
          name: 'Italy',
          homes: 14,
          price: '$30'
        },
        {
          id: 5,
          name: 'China',
          homes: 11,
          price: '$30'
        },
        {
          id: 6,
          name: 'Thailand',
          homes: 23,
          price: '$30'
        },
        {
          id: 7,
          name: 'Australia',
          homes: 36,
          price: '$30'
        },
        {
          id: 8,
          name: 'Germany',
          homes: 24,
          price: '$30'
        },
      ]
    };
  }
}