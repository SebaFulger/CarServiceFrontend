import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CarList } from './car-list/car-list';
import { CarDetail } from './car-detail/car-detail';
import { CarForm } from './car-form/car-form';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'cars', component: CarList },
  { path: 'cars/new', component: CarForm },
  { path: 'cars/:id', component: CarDetail },
  { path: 'cars/:id/edit', component: CarForm },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
