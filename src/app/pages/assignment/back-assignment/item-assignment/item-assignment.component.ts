import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button'
import { RouterLink } from '@angular/router'
import { MatExpansionModule } from '@angular/material/expansion'
import { IAssignment } from '@shared/core/models/entities/assignment.model'
import { DatePipe } from '@angular/common'
import {Subscription} from "rxjs";
import {SharedService} from "@shared/core/services/shared.service";


@Component({
  selector: 'app-item-assignment',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    RouterLink,
    MatExpansionModule,
    DatePipe
  ],
  templateUrl: './item-assignment.component.html',
  styleUrl: './item-assignment.component.css'
})
export class ItemAssignmentComponent implements OnInit, OnDestroy {

  @Input() assignment!: IAssignment

  panelOpenState = false

  isMobile!: boolean
  private subscription!: Subscription


  constructor(
    private sharedService: SharedService,
  ) {
  }


  ngOnInit(): void {
    this.subscription = this.sharedService.isMobileObservable.subscribe(isMobile => {
      this.isMobile = isMobile
    })
  }


  ngOnDestroy()
    :
    void {
    if (this.subscription
    ) {
      this.subscription.unsubscribe()
    }
  }
}
