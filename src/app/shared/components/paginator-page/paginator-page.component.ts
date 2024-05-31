import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core'
import {MatPaginator, PageEvent} from '@angular/material/paginator'
import {AssignmentService} from "@shared/core/services/assignment.service";
import {isEmpty} from "@shared/core/utils/utils";
import {SnackbarService} from "@shared/core/services/snackbar.service";


@Component({
  selector: 'app-paginator-page',
  standalone: true,
  imports: [
    MatPaginator
  ],
  templateUrl: './paginator-page.component.html',
  styleUrl: './paginator-page.component.css'
})
export class PaginatorPageComponent implements AfterViewInit {

  @ViewChild('paginator') paginator!: MatPaginator




  @Output('page') page: EventEmitter<null> = new EventEmitter()


  constructor(
    public assignmentService: AssignmentService,
    private snackbarService: SnackbarService,
  ) {
  }


  setPage(event: PageEvent) {

    // +1 car paginator index commence par 0
    // +1 car paginator de back index commence par 1
    this.assignmentService.getAssignmentList((event.pageIndex + 1), event.pageSize)
      .subscribe(message => {

        if (!isEmpty(message))
          this.snackbarService.showAlert(String(message))

        else
          this.page.emit(null)

      })

  }


  ngAfterViewInit() {


  }


  ngAfterContentInit() {

    if (this.paginator) {

      this.paginator.pageIndex = 0

    }

  }

}
