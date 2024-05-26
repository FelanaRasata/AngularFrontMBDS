import { Component, Input } from '@angular/core'
import { TitleCasePipe, UpperCasePipe } from '@angular/common'


@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {
  @Input() title!: string
}
