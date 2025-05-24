import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)
  },
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: '**', redirectTo: 'weather' }
];
