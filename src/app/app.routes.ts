import { Routes } from '@angular/router';
import { AssignmentsComponent } from "./assignments/assignments.component";
import { HomeComponent } from './home/home.component';
import { FormExampleComponent } from './form/form.component';
import { IconsComponent } from './icons/icons.component';
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {GradesComponent} from "./grades/grades.component";
import {SettingsComponent} from "./settings/settings.component";

export const routes: Routes = [
  {
    path: 'assignments',
    component: AssignmentsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'form',
    component: FormExampleComponent
  },
  {
    path: 'grades',
    component: GradesComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
