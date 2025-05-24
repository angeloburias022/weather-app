import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
  // No declarations here for standalone components
})
export class WeatherModule {}
