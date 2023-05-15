import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  
  constructor() { }

  static getBanners(): BehaviorSubject<string[]> {
    return new BehaviorSubject<string[]>( [
      'assets/images/1.jpg',
      'assets/images/2.jpg',
      'assets/images/3.jpg'
    ]);
  }

  static getRestaurants(): BehaviorSubject<Restaurant[]> {
    return new BehaviorSubject<Restaurant[]>([
      {
        cover: 'assets/images/1.jpg',
        name: 'Stay fit',
        shortName: 'stay fit',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/images/2.jpg',
        name: 'Stay fit 1',
        shortName: 'stay fit 1',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/images/3.jpg',
        name: 'Stay fit 2',
        shortName: 'stay fit 2',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/images/5.jpg',
        name: 'Stay fit 3',
        shortName: 'stay fit 3',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 2,
        deliveryTime: 125,
        distance: 10.5,
        price: 200
      },
    ]);
  }
}
