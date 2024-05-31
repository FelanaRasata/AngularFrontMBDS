import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { MatPaginator, PageEvent } from '@angular/material/paginator'


@Component({
  selector: 'app-paginator-page',
  standalone: true,
  imports: [
    MatPaginator
  ],
  templateUrl: './paginator-page.component.html',
  styleUrl: './paginator-page.component.css'
})
export class PaginatorPageComponent {

  @ViewChild('paginator') paginator!: MatPaginator

  @Input('length') length: number = 100

  @Input('pageSize') pageSize: number = 5 // LIMIT
  @Input('pageSizeOptions') pageSizeOptions: number[] = [5, 10]

  @Input('pageIndex') pageIndex: number = 1 //

  // MatPaginator Output
  @Output('page') page: EventEmitter<PageEvent> = new EventEmitter()


  constructor() {
  }


  ngOnInit(): void {

  }


  setPage(event: PageEvent) {

    this.page.emit(event)

  }


  ngAfterViewInit() {

    console.log(this.paginator)
  }


  ngAfterContentInit() {

    if (this.paginator) {

      this.paginator.pageIndex = 0

    }

  }

}
