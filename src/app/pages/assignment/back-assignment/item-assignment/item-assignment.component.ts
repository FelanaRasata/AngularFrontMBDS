import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button'
import { RouterLink } from '@angular/router'
import { MatExpansionModule } from '@angular/material/expansion'


@Component({
  selector: 'app-item-assignment',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    RouterLink,
    // CdkDragHandle
    MatExpansionModule
  ],
  templateUrl: './item-assignment.component.html',
  styleUrl: './item-assignment.component.css'
})
export class ItemAssignmentComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`
  panelOpenState = false

}
