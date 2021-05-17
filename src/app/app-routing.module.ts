import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from '../app/crisis-list/crisis-list.component'
import { HeroesListComponent } from '../app/heroes-list/heroes-list.component'
import { PageNotFoundComponent } from  '../app/page-not-found/page-not-found.component'


// const routes: Routes = [
//   {path:'crisis-list', component: CrisisListComponent},
//   {path:'heroes-list', component: HeroesListComponent},
//   {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent}];

const routes: Routes = [
  {
    path: 'first-component',
    component: CrisisListComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: HeroesListComponent, // child route component that the router renders
      },
      {path: '', redirectTo: '/first-component', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
