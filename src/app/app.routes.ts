import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CarList } from './car-list/car-list';
import { CarDetail } from './car-detail/car-detail';
import { CarForm } from './car-form/car-form';
import { MechanicList } from './mechanic-list/mechanic-list';
import { MechanicForm } from './mechanic-form/mechanic-form';
import { ServiceRecordForm } from './service-record-form/service-record-form';
import { authGuard } from './auth-guard';
import { Landing } from './landing/landing';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'cars', component: CarList, canActivate: [authGuard] },
  { path: 'mechanics', component: MechanicList, canActivate: [authGuard] },
  { path: 'mechanics/new', component: MechanicForm, canActivate: [authGuard] },
  // { path: 'mechanics.:id', component: MechanicDetial },
  { path: 'mechanics/:id/edit', component: MechanicForm, canActivate: [authGuard] },
  { path: 'cars/new', component: CarForm, canActivate: [authGuard] },
  { path: 'cars/:id', component: CarDetail, canActivate: [authGuard] },
  { path: 'cars/:id/edit', component: CarForm, canActivate: [authGuard] },
  //  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'service-records/new', component: ServiceRecordForm, canActivate: [authGuard] },
  { path: 'service-records/:id/edit', component: ServiceRecordForm, canActivate: [authGuard] },
  { path: '', component: Landing },
];
