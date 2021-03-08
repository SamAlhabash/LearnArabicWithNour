import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.scss']
})
export class ExcerciseComponent implements OnInit {
  data : string;
  constructor(private route: ActivatedRoute, private dom: DomSanitizer) { }

  ngOnInit(): void {
    this.data = this.dom.bypassSecurityTrustResourceUrl(this.route.snapshot.data.link);
    console.log(this.dom.bypassSecurityTrustResourceUrl(this.route.snapshot.data.link))
    console.log(this.data);
  }

}
