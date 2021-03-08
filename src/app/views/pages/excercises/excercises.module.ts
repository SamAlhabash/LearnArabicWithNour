import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcercisesRoutingModule } from './excercises-routing.module';
import { ExcercisesComponent } from './excercises.component';


@NgModule({
  declarations: [ExcercisesComponent],
  imports: [
    CommonModule,
    ExcercisesRoutingModule
  ]
})
export class ExcercisesModule { }
