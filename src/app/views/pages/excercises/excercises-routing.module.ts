import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcerciseComponent } from './excercise/excercise.component';

import { ExcercisesComponent } from './excercises.component';

const routes: Routes = [{ path: 'excercises', component: ExcerciseComponent },
{path: 'excercises/:name', component: ExcerciseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExcercisesRoutingModule {
  
 }
