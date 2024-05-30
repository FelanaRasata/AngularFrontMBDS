import {Component, OnInit} from '@angular/core'
import {CardAssignmentComponent} from './card-assignment/card-assignment.component'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {NavigationEnd, Router, RouterModule} from '@angular/router'
import {TitlePageComponent} from '../../components/title-page/title-page.component'
import {SnackbarService} from '../../../shared/services/snackbar.service'
import {PaginationResult} from "../../../shared/utils/interface";
import {Assignment} from "../../../shared/model/assignment.model";
import {AssignmentService} from "../../../shared/services/assignment.service";
import {AuthService} from "../../../shared/services/auth.service";
import {Role} from "../../../shared/utils/role";


@Component({
  selector: 'app-list-assignment',
  standalone: true,
  imports: [
    CardAssignmentComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    TitlePageComponent
  ],
  templateUrl: './list-assignment.component.html',
  styleUrl: './list-assignment.component.css'
})
export class ListAssignmentComponent implements OnInit {

  title = 'List of assignment'

  assignmentList!: PaginationResult<Assignment[]>
  page = 0
  limit = 20

  disabledAdd = true

  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
    private assignmentService: AssignmentService,
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

    this.assignmentService.getAssignmentList(this.page, this.limit).subscribe(
      response => {

        if (response.status == 200)
          this.assignmentList = response.data!
        else
          this.snackbarService.showAlert(response.message)
      })

    this.authService.isAuthorized(Role.st).then(role => {
        this.disabledAdd = !role
      }
    )

  }


}
