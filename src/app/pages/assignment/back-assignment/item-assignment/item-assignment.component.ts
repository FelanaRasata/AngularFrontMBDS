import {Component, Input} from '@angular/core'
import {MatCardModule} from '@angular/material/card'
import {MatButton} from '@angular/material/button'
import {RouterLink} from '@angular/router'
import {MatExpansionModule} from '@angular/material/expansion'
import {Assignment} from "../../../../shared/model/assignment.model";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-item-assignment',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    RouterLink,
    // CdkDragHandle
    MatExpansionModule,
    DatePipe
  ],
  templateUrl: './item-assignment.component.html',
  styleUrl: './item-assignment.component.css'
})
export class ItemAssignmentComponent {

  @Input() assignment!: Assignment

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`
  panelOpenState = false

}
