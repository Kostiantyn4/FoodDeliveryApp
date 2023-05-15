import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { BannerModule } from "../../../components/banner/banner.module";

import { HomePage } from './home.page';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';

@NgModule({
    declarations: [
        HomePage, 
        RestaurantComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        BannerModule
    ]
})
export class HomePageModule {
}
