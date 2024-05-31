import { Component, NgZone, OnInit } from '@angular/core'
import { CardAssignmentComponent } from './card-assignment/card-assignment.component'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router'
import { TitlePageComponent } from '@shared/components/title-page/title-page.component'
import { SnackbarService } from '@shared/core/services/snackbar.service'
import { AssignmentService } from '@shared/core/services/assignment.service'
import { AuthService } from '@shared/core/services/auth.service'
import { EAssignmentLink, EUserRole } from '@shared/core/types/enums'
import { isEmpty } from '@shared/core/utils/utils'
import { PaginatorPageComponent } from '@shared/components/paginator-page/paginator-page.component'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'


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
    PaginatorPageComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './list-assignment.component.html',
  styleUrl: './list-assignment.component.css'
})
export class ListAssignmentComponent implements OnInit {

  searchValue = ''

  title = 'List of assignment'

  disabledAdd = true
  protected readonly EAssignmentLink = EAssignmentLink


  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
    public assignmentService: AssignmentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private ngZone: NgZone,
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

    this.authService.isAuthorized(EUserRole.st).then(role => {
      this.disabledAdd = !role
    })

  }

  scrollToTop() {

    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('huhu');

    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }

  }

  paginatorEvent(page: number): void {

    this.assignmentService.getAssignmentList(page, this.assignmentService.assignmentsPaginationData.value.limit, this.searchValue)
      .subscribe(message => {

        if (!isEmpty(message)) {

          this.snackbarService.showAlert(String(message))

        }

        this.scrollToTop()

      })

    /*if ('scrollBehavior' in document.documentElement.style) {
      console.log(1)
      window.scroll({ top: 0, behavior: 'smooth' })
    } else {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }*/
  }


  search() {

    const page = this.route.snapshot.params['page']
    const limit = this.route.snapshot.params['limit']

    this.assignmentService.getAssignmentList(page, limit, this.searchValue)
      .subscribe(message => {

        if (!isEmpty(message))
          this.snackbarService.showAlert(String(message))

      })
  }
}
