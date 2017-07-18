import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { NewsComponent }      from './news.component';
import { NewsDetailComponent }  from './news-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'TopTrends/dashboard', component: DashboardComponent},
  { path: 'toptrends/dashboard', component: DashboardComponent},
  { path: 'Toptrends/dashboard',component: DashboardComponent},
  { path: 'topTrends/dashboard', component: DashboardComponent},
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: NewsDetailComponent },
  { path: 'news',     component: NewsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}