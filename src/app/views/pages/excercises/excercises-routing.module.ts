import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExcerciseComponent } from "./excercise/excercise.component";

import { ExcercisesComponent } from "./excercises.component";

const routes: Routes = [
  {
    path: "",
    component: ExcercisesComponent,
    children: [
      {
        path: "",
        component: ExcerciseComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcercisesRoutingModule {}
