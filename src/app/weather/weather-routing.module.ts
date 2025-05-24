import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherContainerComponent } from './containers/weather-container/weather-container.component';

const routes: Routes = [
  { path: '', component: WeatherContainerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    WeatherContainerComponent  // Import standalone component here
  ],
  exports: [RouterModule]
})
export class WeatherRoutingModule {}
