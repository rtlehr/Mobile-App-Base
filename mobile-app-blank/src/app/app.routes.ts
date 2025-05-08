import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'clock',
    loadComponent: () => import('./components/clock/clock.page').then( m => m.ClockPage)
  },
  {
    path: 'files',
    loadComponent: () => import('./components/files/files.page').then( m => m.FilesPage)
  },
  {
    path: 'person',
    loadComponent: () => import('./components/person/person.page').then( m => m.PersonPage)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./components/calendar/calendar.page').then( m => m.CalendarPage)
  },
];
