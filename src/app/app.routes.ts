import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => component: HomeComponent},
  { path: 'angular', loadComponent: () => component: HomeComponent },
  { path: 'typescript', loadComponent: () => component: HomeComponent},
  { path: 'javascript', loadComponent: () => component: HomeComponent },
  { path: 'rxjs', loadComponent: () => component: HomeComponent}
  { path: '**', loadComponent: () => component: PageNotFoundComponent }
];
