// import { Router, RouterConfig }  from '@angular/router';                    // Todo - wrong
import { RouterModule }          from '@angular/router';                    // stevo
// import { HomeComponent }                from '../home/home.component';
// import { DetailComponent }              from '../detail/detail.component';
// import { ProjectsComponent }            from '../project/project.component';
// import { AboutComponent }               from '../about/about.component';
// import { ErrorComponent }               from '../error/error.component';
// import { ProjectService }               from '../shared/project.service';

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent} ,
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent }
];

export const myRouterProviders = [
  provideRouter(routes),
  ProjectService
]
