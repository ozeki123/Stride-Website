import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      products: [
        {
          id: 1,
          name: 'America',
          homes_available: 62,
          price: '$40'
        },
        {
          id: 2,
          name: 'France',
          homes_available: 27,
          price: '$80'
        },
        {
          id: 3,
          name: 'Japan',
          homes_available: 21,
          price: '$30'
        },
        {
          id: 4,
          name: 'Italy',
          homes_available: 14,
          price: '$30'
        },
        {
          id: 5,
          name: 'China',
          homes_available: 11,
          price: '$30'
        },
        {
          id: 6,
          name: 'Thailand',
          homes_available: 23,
          price: '$30'
        },
        {
          id: 7,
          name: 'Australia',
          homes_available: 36,
          price: '$30'
        },
        {
          id: 8,
          name: 'Germany',
          homes_available: 24,
          price: '$30'
        },
      ]
    };
  }
}