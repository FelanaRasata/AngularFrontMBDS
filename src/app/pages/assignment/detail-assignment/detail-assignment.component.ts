import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { TitlePageComponent } from '@shared/components/title-page/title-page.component'
import { IAssignment } from '@shared/core/models/entities/assignment.model'
import { AssignmentService } from '@shared/core/services/assignment.service'
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { CommonModule, DatePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatDividerModule } from '@angular/material/divider'
import { Subscription } from 'rxjs'
import { SharedService } from '@shared/core/services/shared.service'
import { MatDialog } from '@angular/material/dialog'
import { DeleteAssignmentComponent } from './delete-assignment/delete-assignment.component'
import { MatIconModule } from '@angular/material/icon'
import { SnackbarService } from '@shared/core/services/snackbar.service'
import { AuthService } from '@shared/core/services/auth.service'
import { EUserRole } from '@shared/core/types/enums'


@Component({
  selector: 'app-detail-assignment',
  standalone: true,
  imports: [
    MatListModule,
    TitlePageComponent,
    MatCardModule,
    MatButtonModule,
    DatePipe,
    MatSlideToggleModule,
    FormsModule,
    CommonModule,
    MatDividerModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './detail-assignment.component.html',
  styleUrl: './detail-assignment.component.css'
})
export class DetailAssignmentComponent implements OnInit, OnDestroy {

  title = 'Assignment Detail'

  assignmentSent!: IAssignment | undefined

  isMobile!: boolean
  disabledButtons = true
  private subscription!: Subscription


  constructor(
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private authService: AuthService,
  ) {
  }


  ngOnInit() {
    // On récupère l'id de l'assignment dans l'URL à l'aide de ActivatedRoute
    const id = this.route.snapshot.params['id']

    // On utilise le service pour récupérer l'assignment avec cet id
    this.assignmentService.getAssignment(id).subscribe((data) => {
      if (data.status) {
        this.assignmentSent = data.data!
      }
    })

    this.subscription = this.sharedService.isMobileObservable.subscribe(isMobile => {
      this.isMobile = isMobile
    })


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const navigation = this.router.getCurrentNavigation()
        const state = navigation?.extras.state as { message?: string }
        if (state?.message) {
          // Show success message
          this.snackbarService.showAlert(state.message, 'Close')
        }
      }
    })

    this.authService.isAuthorized(EUserRole.tr).then(role => {
        this.disabledButtons = !role
      }
    )
  }


  openDialog() {
    const dialogRef = this.dialog.open(DeleteAssignmentComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.assignmentService.deleteAssignment(this.assignmentSent?._id!).subscribe(response => {
          this.snackbarService.action(response, '/assignment/list/1/20', 'Assignment Deleted')
        })
      }
    })
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
