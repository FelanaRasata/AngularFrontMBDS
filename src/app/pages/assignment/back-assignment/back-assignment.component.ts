import { Component, OnDestroy, OnInit } from '@angular/core'
import { TitlePageComponent } from '../../components/title-page/title-page.component'
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop'
import { ItemAssignmentComponent } from './item-assignment/item-assignment.component'
import { Subscription } from 'rxjs'
import { SharedService } from '../../../shared/services/shared.service'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmAssignmentComponent } from './confirm-assignment/confirm-assignment.component'


@Component({
  selector: 'app-back-assignment',
  standalone: true,
  imports: [
    TitlePageComponent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    ItemAssignmentComponent,
    CdkDragHandle
  ],
  templateUrl: './back-assignment.component.html',
  styleUrl: './back-assignment.component.css'
})
export class BackAssignmentComponent implements OnInit, OnDestroy {
  title = 'Update the assignments'

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']

  isMobile!: boolean
  private subscription!: Subscription


  constructor(private sharedService: SharedService, public dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.subscription = this.sharedService.isMobileObservable.subscribe(isMobile => {
      this.isMobile = isMobile
    })
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      const dialogRef = this.dialog.open(ConfirmAssignmentComponent, {
        data: 0,
      })
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`)
        if (result) {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          )
        }
      })

    }
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
