import { MENU } from "./../../../layout/sidebar/menu";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-excercise",
  templateUrl: "./excercise.component.html",
  styleUrls: ["./excercise.component.scss"],
})
export class ExcerciseComponent implements OnInit, OnDestroy {
  data: any;
  paramSubscribtion: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dom: DomSanitizer  ) {}

  ngOnInit(): void {
    this.paramSubscribtion = this.route.params.subscribe((params) => {
      for (const item of MENU) {
        if (item.label == params["name"]) {
          this.data = this.dom.bypassSecurityTrustResourceUrl(
            item.excerciseLink
          );
        } else if (item.subItems) {
          for (const subitem of item.subItems) {
            if (subitem.label == params["name"]) {
              this.data = this.dom.bypassSecurityTrustResourceUrl(
                subitem.excerciseLink
              );
            }
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.paramSubscribtion.unsubscribe();
  }
}
