import {Component, Input} from '@angular/core'
import {Paginator} from "../../../shared/utils/interface";


@Component({
  selector: 'app-paginator-page',
  standalone: true,
  imports: [],
  templateUrl: './paginator-page.component.html',
  styleUrl: './paginator-page.component.css'
})
export class PaginatorPageComponent {
  @Input() paginator!: Paginator
}
