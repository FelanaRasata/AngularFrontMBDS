import {Component, OnDestroy, OnInit} from '@angular/core'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatStepperModule} from '@angular/material/stepper'
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {Subscription} from 'rxjs'
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {provideNativeDateAdapter} from '@angular/material/core'
import {TitlePageComponent} from '@shared/components/title-page/title-page.component'
import {MatCardModule} from '@angular/material/card'
import {SharedService} from '@shared/core/services/shared.service'
import {AssignmentService} from '@shared/core/services/assignment.service'
import {SubjectService} from '@shared/core/services/subject.service'
import {SnackbarService} from '@shared/core/services/snackbar.service'
import {IAssignment} from '@shared/core/models/entities/assignment.model'
import {ISubject} from '@shared/core/models/entities/subject.model'
import {EAssignmentLink} from "@shared/core/types/enums";


@Component({
  selector: 'app-add-assignment',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    TitlePageComponent,
    MatCardModule
  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent implements OnInit, OnDestroy {
  title = 'Add assignment'

  // champs du formulaire
  firstFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
    subject: [undefined, Validators.required],

  })

  subjectList: ISubject[] = []

  isMobile!: boolean
  private subscription!: Subscription


  constructor(
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private assignmentService: AssignmentService,
    private subjectService: SubjectService,
    private snackbarService: SnackbarService
  ) {
  }


  ngOnInit(): void {

    this.subjectService.getSubjects()
      .subscribe(response => {

        if (response.status == 200) {
          this.subjectList = response.data!
        } else {
          this.snackbarService.showAlert(response.message)
        }

      })

    this.subscription = this.sharedService.isMobileObservable
      .subscribe(isMobile => {
        this.isMobile = isMobile
      })

  }


  ngOnDestroy(): void {

    if (this.subscription)
      this.subscription.unsubscribe()

  }


  onSubmit() {

    // on crée un nouvel assignment
    const newAssignment: IAssignment = {
      subject: this.firstFormGroup.value.subject!,
      title: this.firstFormGroup.value.title!
    }

    // on utilise le service pour directement ajouter
    // le nouvel assignment dans le tableau
    this.assignmentService
      .addAssignment(newAssignment)
      .subscribe((message) => {

        const link = "/assignment/" + this.assignmentService.assignment.value?._id + "/detail"


        this.snackbarService.action(message, link, 'Assignment Created')

      })

  }

}
