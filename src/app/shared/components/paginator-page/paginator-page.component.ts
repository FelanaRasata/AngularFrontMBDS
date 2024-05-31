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




  @Output('page') page: EventEmitter<number> = new EventEmitter()


  constructor(
    public assignmentService: AssignmentService,
    private snackbarService: SnackbarService,
  ) {
  }


  setPage(event: PageEvent) {

    // +1 car paginator index commence par 0
    // +1 car paginator de back index commence par 1
    this.page.emit(event.pageIndex + 1)



  }


  ngAfterViewInit() {


  }


  ngAfterContentInit() {

    if (this.paginator) {

      this.paginator.pageIndex = 0

    }

  }

}
