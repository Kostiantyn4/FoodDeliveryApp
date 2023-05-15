import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from './banner.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    IonicModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
