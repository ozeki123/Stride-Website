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
          price: '$40',
          image: '/assets/images/america.png'
        },
        {
          id: 2,
          name: 'France',
          homes: 27,
          price: '$80',
          image: '/assets/images/france.png'
        },
        {
          id: 3,
          name: 'Japan',
          homes: 21,
          price: '$30',
          image: '/assets/images/japan.png'
        },
        {
          id: 4,
          name: 'Italy',
          homes: 14,
          price: '$30',
          image: '/assets/images/italy.png'
        },
        {
          id: 5,
          name: 'China',
          homes: 11,
          price: '$30',
          image: '/assets/images/china.png'
        },
        {
          id: 6,
          name: 'Thailand',
          homes: 23,
          price: '$30',
          image: '/assets/images/thailand.png'
        },
        {
          id: 7,
          name: 'Australia',
          homes: 36,
          price: '$30',
          image: '/assets/images/australia.png'
        },
        {
          id: 8,
          name: 'Germany',
          homes: 24,
          price: '$30',
          image: '/assets/images/germany.png'
        },
      ]
    };
  }
}