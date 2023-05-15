import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../models/restaurant';
import { GetDataService } from 'src/app/services/get-data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners!: BehaviorSubject<string[]>;
  restaurants!: BehaviorSubject<Restaurant[]>;
  
  constructor() { }

  ngOnInit() {
    this.banners = GetDataService.getBanners();
    this.restaurants = GetDataService.getRestaurants();
  }
  
}
