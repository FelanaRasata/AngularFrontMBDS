import {Component, OnDestroy, OnInit} from '@angular/core'
import {TitlePageComponent} from '../../components/title-page/title-page.component'
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
import {Subscription} from 'rxjs'
import {SharedService} from '../../../shared/services/shared.service'
import {MatDialog} from '@angular/material/dialog'
import {ConfirmAssignmentComponent} from './confirm-assignment/confirm-assignment.component'
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AssignmentService} from "../../../shared/services/assignment.service";
import {Assignment} from "../../../shared/model/assignment.model";
import {PaginationResult} from "../../../shared/utils/interface";
import {SnackbarService} from "../../../shared/services/snackbar.service";


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
export class BackAssignmentComponent implements OnInit, OnDestroy {

  title = 'Update the assignments'

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']

  page = 0
  size = 10

  isMobile!: boolean
  assignmentsConfirmed!: PaginationResult<Assignment[]>
  assignmentsToBeConfirmed!: PaginationResult<Assignment[]>
  private subscription!: Subscription

  constructor(
    private sharedService: SharedService,
    public dialog: MatDialog,
    private assignmentService: AssignmentService,
    private snackbarService: SnackbarService,
  ) {
  }


  ngOnInit(): void {
    this.subscription = this.sharedService.isMobileObservable.subscribe(
      isMobile => {
        this.isMobile = isMobile
      })

    this.assignmentService.getAssignmentList(this.page, this.size).subscribe(
      (response) => {
        if (response.status == 200) {
          this.assignmentsConfirmed = response.data!
          this.assignmentsToBeConfirmed = response.data!
        } else
          this.snackbarService.showAlert(response.message)
      })
  }


  drop(event: CdkDragDrop<Assignment[]>) {
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
