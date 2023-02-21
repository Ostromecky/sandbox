import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

import { NxWelcomeComponent } from './app/nx-welcome.component';
import { PageComponent } from './app/page/page.component';

const ROUTES: Route[] = [
  { path: 'welcome', component: NxWelcomeComponent },
  { path: 'page', loadComponent: () => import('./app/page/page.component').then((mod) => mod.PageComponent) },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  /**
   * Root providers
   */
  providers: [provideRouter(ROUTES)]
});
