import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AngularComponent } from './components/angular/angular';
import { TypescriptComponent } from './components/typescript/typescript';
import { JavascriptComponent } from './components/javascript/javascript';
import { RxjsComponent } from './components/rxjs/rxjs';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: '**', component: PageNotFoundComponent }
];
