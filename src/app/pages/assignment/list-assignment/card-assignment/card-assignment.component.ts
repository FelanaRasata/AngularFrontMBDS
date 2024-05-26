import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Subscription} from "rxjs";
import {SharedService} from "../../../../shared/services/shared.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card-assignment',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './card-assignment.component.html',
  styleUrl: './card-assignment.component.css'
})
export class CardAssignmentComponent implements OnInit, OnDestroy {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  isMobile!: boolean;
  private subscription!: Subscription;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.subscription = this.sharedService.isMobileObservable.subscribe(isMobile => {
      this.isMobile = isMobile;
      console.log(isMobile)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
