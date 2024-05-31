import {Component, OnInit} from '@angular/core'
import {CardAssignmentComponent} from './card-assignment/card-assignment.component'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {NavigationEnd, Router, RouterModule} from '@angular/router'
import {TitlePageComponent} from '@shared/components/title-page/title-page.component'
import {IPaginationResult} from '@shared/core/types/interfaces'
import {IAssignment} from '@shared/core/models/entities/assignment.model'
import {SnackbarService} from '@shared/core/services/snackbar.service'
import {AssignmentService} from '@shared/core/services/assignment.service'
import {AuthService} from '@shared/core/services/auth.service'
import {EAssignmentLink, EUserRole} from '@shared/core/types/enums'
import {isEmpty} from '@shared/core/utils/utils'
import {PaginatorPageComponent} from "@shared/components/paginator-page/paginator-page.component";


@Component({
  selector: 'app-list-assignment',
  standalone: true,
  imports: [
    CardAssignmentComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    TitlePageComponent,
    PaginatorPageComponent
  ],
  templateUrl: './list-assignment.component.html',
  styleUrl: './list-assignment.component.css'
})
export class ListAssignmentComponent implements OnInit {

  title = 'List of assignment'

  assignmentList!: IPaginationResult<IAssignment[]>
  page = 0
  limit = 20

  disabledAdd = true
  protected readonly EAssignmentLink = EAssignmentLink;

  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
    public assignmentService: AssignmentService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {

        const navigation = this.router.getCurrentNavigation()
        const state = navigation?.extras.state as { message?: string }

        if (state?.message) {
          this.snackbarService.showAlert(state.message, 'Close')
        }

      }

    })

    this.assignmentService.getAssignmentList(this.page, this.limit)
      .subscribe(message => {

        console.log("message : ", message)

        if (!isEmpty(message))
          this.snackbarService.showAlert(String(message))

      })

    this.authService.isAuthorized(EUserRole.st).then(role => {
      this.disabledAdd = !role
    })

  }
}
