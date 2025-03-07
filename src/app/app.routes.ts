import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormExampleComponent } from './form/form.component';
import { IconsComponent } from './icons/icons.component';
import { OnpushComponent } from './onpush/onpush.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormExampleComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: 'onpush',
    component: OnpushComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
