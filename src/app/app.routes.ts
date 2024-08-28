import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { IconsComponent } from './icons/icons.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
