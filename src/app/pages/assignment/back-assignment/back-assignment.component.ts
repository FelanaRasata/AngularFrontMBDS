import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { TitlePageComponent } from '@shared/components/title-page/title-page.component'
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
import { MatDialog } from '@angular/material/dialog'
import { ConfirmAssignmentComponent } from './confirm-assignment/confirm-assignment.component'
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling'
import { IPaginationResult } from '@shared/core/types/interfaces'
import { IAssignment } from '@shared/core/models/entities/assignment.model'
import { SharedService } from '@shared/core/services/shared.service'
import { AssignmentService } from '@shared/core/services/assignment.service'
import { SnackbarService } from '@shared/core/services/snackbar.service'
import { isEmpty } from '@shared/core/utils/utils'


@Component({
  selector: 'app-back-assignment',
  standalone: true,
  imports: [
    TitlePageComponent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    ItemAssignmentComponent,
    CdkDragHandle,
    ScrollingModule
  ],
  templateUrl: './back-assignment.component.html',
  styleUrl: './back-assignment.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackAssignmentComponent implements OnInit, OnDestroy, AfterViewInit {

  title: string = 'Update the assignments'
  page: number = 0
  size: number = 20
  isMobile!: boolean

  @ViewChild('scrollerConfirmed') scrollerConfirmed!: CdkVirtualScrollViewport
  @ViewChild('scrollerToBeConfirmed') scrollerToBeConfirmed!: CdkVirtualScrollViewport

  private subscription!: Subscription


  constructor(
    private sharedService: SharedService,
    public dialog: MatDialog,
    public assignmentService: AssignmentService,
    private snackbarService: SnackbarService,
  ) {
  }


  ngOnInit(): void {

    this.subscription = this.sharedService.isMobileObservable.subscribe(
      isMobile => {
        this.isMobile = isMobile
      })

    this.assignmentService.getFilteredAssignmentList(this.page, this.size, true)
      .subscribe(message => {

        if (!isEmpty(message))
          this.snackbarService.showAlert(String(message))

      })

    this.assignmentService.getFilteredAssignmentList(this.page, this.size, false)
      .subscribe(message => {

        if (!isEmpty(message))
          this.snackbarService.showAlert(String(message))

      })

    /*this.assignmentService.getAssignmentList(this.page, this.size).subscribe(
      (response) => {

        if (response.status == 200) {
          this.assignmentsConfirmed = response.data!
          this.assignmentsToBeConfirmed = response.data!
        } else
          this.snackbarService.showAlert(response.message)
      })*/

  }


  ngAfterViewInit(): void {

    if (!this.scrollerConfirmed && !this.scrollerToBeConfirmed) return

  }


  drop(event: CdkDragDrop<IAssignment[], any>) {

    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data!, event.previousIndex, event.currentIndex)

    } else {

      const dialogRef = this.dialog.open(ConfirmAssignmentComponent, {
        data: 0,
      })

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`)
        if (result) {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data!,
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
