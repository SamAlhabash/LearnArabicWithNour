import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcercisesRoutingModule } from './excercises-routing.module';
import { ExcercisesComponent } from './excercises.component';
import { ExcerciseComponent } from './excercise/excercise.component';


@NgModule({
  declarations: [ExcercisesComponent, ExcerciseComponent],
  imports: [
    CommonModule,
    ExcercisesRoutingModule
  ]
})
export class ExcercisesModule { }
