import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-assignment',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './delete-assignment.component.html',
  styleUrl: './delete-assignment.component.css'
})
export class DeleteAssignmentComponent {

}
