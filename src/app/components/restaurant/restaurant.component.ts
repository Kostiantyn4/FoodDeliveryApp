import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent  implements OnInit {

  @Input() restaurant!: Restaurant;
  
  constructor() { }

  ngOnInit() {}

  isNullOrEmpty(str: string | null | undefined): boolean {
    return !str || str.trim() === '';
  }

  joinCuisine(cuisine: string[]) {
    return cuisine.join(', ');
  }
}
