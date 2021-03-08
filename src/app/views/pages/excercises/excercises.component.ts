import { LinkProviderService } from './link-provider.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.scss']
})
export class ExcercisesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private linkProvider: LinkProviderService) { }
  excerciseLink: string = '';
  ngOnInit(): void {
    this.excerciseLink = this.linkProvider.activeItem.excerciseLink;
    this.excerciseLink = this.route.snapshot.params['name'];

  }

}
