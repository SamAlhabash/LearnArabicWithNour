import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcercisesComponent } from './excercises.component';

const routes: Routes = [{ path: 'excercises', component: ExcercisesComponent },
{path: 'excercises/:name', component: ExcercisesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExcercisesRoutingModule {
  
 }
