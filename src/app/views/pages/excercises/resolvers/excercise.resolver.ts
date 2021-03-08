import { MENU } from "./../../../layout/sidebar/menu";
import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ExcerciseResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot): string {
    for (const item of MENU) {
      if (item.label == route.params["name"]) {
        return item.excerciseLink;
      } else if (item.subItems) {
        for (const subitem of item.subItems) {
          if (subitem.label == route.params["name"]) {
            return subitem.excerciseLink;
          }
        }
      }
    }
  }
}
