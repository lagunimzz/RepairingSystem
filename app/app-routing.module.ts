import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepairComputerFormComponent } from './repair-computer-form.component';
// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/repair-computer-form', pathMatch: 'full' },   
  { path: 'repair-computer-form',  component: RepairComputerFormComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
