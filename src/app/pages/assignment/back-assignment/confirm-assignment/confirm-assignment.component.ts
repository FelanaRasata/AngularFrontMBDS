import {Component, Inject} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

interface IData {
  score: number
  remark: string
}

@Component({
  selector: 'app-confirm-assignment',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  templateUrl: './confirm-assignment.component.html',
  styleUrl: './confirm-assignment.component.css'
})
export class ConfirmAssignmentComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IData,
  ) {
  }


  onNoClick(): void {
    this.dialogRef.close()
  }
}
