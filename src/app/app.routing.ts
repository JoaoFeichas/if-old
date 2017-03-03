/**
 * Created by joaofeichas on 03/03/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRouters: Routes = [
  {path: '', component: AboutComponent},
  {path: 'landingpage', component: LandingPageComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRouters);
