import {AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {TitlePageComponent} from '@shared/components/title-page/title-page.component'
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop'
import {ItemAssignmentComponent} from './item-assignment/item-assignment.component'
import {filter, map, pairwise, Subscription, throttleTime} from 'rxjs'
import {MatDialog} from '@angular/material/dialog'
import {ConfirmAssignmentComponent} from './confirm-assignment/confirm-assignment.component'
import {CdkVirtualScrollViewport, ScrollingModule} from '@angular/cdk/scrolling'
import {IAssignment} from '@shared/core/models/entities/assignment.model'
import {SharedService} from '@shared/core/services/shared.service'
import {AssignmentService} from '@shared/core/services/assignment.service'
import {SnackbarService} from '@shared/core/services/snackbar.service'
import {isEmpty} from '@shared/core/utils/utils'


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

  isMobile!: boolean

  toBeConfirmed: boolean = false
  confirmed: boolean = true

  @ViewChild('scrollerConfirmed') scrollerConfirmed!: CdkVirtualScrollViewport
  @ViewChild('scrollerToBeConfirmed') scrollerToBeConfirmed!: CdkVirtualScrollViewport

  private subscription!: Subscription


  constructor(
    private sharedService: SharedService,
    public dialog: MatDialog,
    public assignmentService: AssignmentService,
    private snackbarService: SnackbarService,
    private ngZone: NgZone
  ) {
  }


  ngOnInit(): void {

    this.subscription = this.sharedService.isMobileObservable.subscribe(
      isMobile => {
        this.isMobile = isMobile
      })


    this.getFilteredAssignmentList(this.confirmed, false)
    this.getFilteredAssignmentList(this.toBeConfirmed, false)


  }

  ngAfterViewInit(): void {

    if (!this.scrollerConfirmed && !this.scrollerToBeConfirmed) return

    this.scrollerToBeConfirmed.elementScrolled()
      .pipe(
        map(event => {
          return this.scrollerToBeConfirmed.measureScrollOffset("bottom")
        }),
        pairwise(),
        filter(([y1, y2]) => {
          return y2 < y1 && y2 < 50
        }),
        throttleTime(300)
      )
      .subscribe(distance => {
          this.ngZone.run(() => {
            this.getFilteredAssignmentList(this.toBeConfirmed, true)
          })
        }
      )

    this.scrollerConfirmed.elementScrolled()
      .pipe(
        map(event => {
          return this.scrollerConfirmed.measureScrollOffset("bottom")
        }),
        pairwise(),
        filter(([y1, y2]) => {
          return y2 < y1 && y2 < 50
        }),
        throttleTime(300)
      )
      .subscribe(distance => {
          this.ngZone.run(() => {
            this.getFilteredAssignmentList(this.confirmed, true)
          })

        }
      )


  }

  drop(event: CdkDragDrop<IAssignment[], any>) {

    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data!, event.previousIndex, event.currentIndex)

    } else {

      let assignment = event.container.data[event.currentIndex]

      const dialogRef = this.dialog.open(ConfirmAssignmentComponent, {
        data: { score : assignment.score, remark: assignment.remark },
      })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

          transferArrayItem(
            event.previousContainer.data,
            event.container.data!,
            event.previousIndex,
            event.currentIndex,
          )

          assignment.confirm = true
          assignment.score = result.score
          assignment.remark = result.remark

          this.assignmentService
            .updateAssignment(assignment)
            .subscribe((message) => {
            if (!isEmpty(message))
              this.snackbarService.showAlert(String(message))
            else
              this.snackbarService.showAlert("Assignment successfully updated")

          })

        }
      })

    }
  }

  ngOnDestroy(): void {

    if (this.subscription) {
      this.subscription.unsubscribe()
    }

  }

  private getFilteredAssignmentList(confirmed: boolean, add: boolean) {

    let page: number = 1
    let size: number = 10

    let getAssignmentList = true


    if (add && confirmed) {
      if (this.assignmentService.confirmedAssignments.value.length < this.assignmentService.confirmedAssignmentsPaginationData.value.totalItems) {
        page = this.assignmentService.confirmedAssignmentsPaginationData.value.page + 1
      } else
        getAssignmentList = false
    }

    if (add && !confirmed) {
      if (this.assignmentService.notConfirmedAssignments.value.length < this.assignmentService.notConfirmedAssignmentsPaginationData.value.totalItems) {
        page = this.assignmentService.notConfirmedAssignmentsPaginationData.value.page + 1
      } else
        getAssignmentList = false
    }

    if (getAssignmentList) {
      this.assignmentService.getFilteredAssignmentList(page, size, confirmed, add)
        .subscribe(message => {

          if (!isEmpty(message))
            this.snackbarService.showAlert(String(message))


        })
    }

  }

}
