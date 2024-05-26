import {Component, Input} from '@angular/core';
import {CardAssignmentComponent} from "./card-assignment/card-assignment.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {TitlePageComponent} from "../../components/title-page/title-page.component";

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
export class ListAssignmentComponent {

  title ="List of assignment"

  @Input() isMobile = false
  fillerNav = Array.from({length: 10}, (_, i) => `Item ${i + 1}`);

}
