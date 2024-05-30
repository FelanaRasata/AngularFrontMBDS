import {Component, OnDestroy, OnInit} from '@angular/core'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatStepperModule} from '@angular/material/stepper'
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {Subscription} from 'rxjs'
import {SharedService} from '../../../shared/services/shared.service'
import {Subject} from '../../../shared/model/subject.model'
import {AssignmentService} from '../../../shared/services/assignment.service'
import {SubjectService} from '../../../shared/services/subject.service'
import {Router} from '@angular/router'
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {provideNativeDateAdapter} from '@angular/material/core'
import {TitlePageComponent} from '../../components/title-page/title-page.component'
import {Assignment} from '../../../shared/model/assignment.model'
import {SnackbarService} from '../../../shared/services/snackbar.service'
import {MatCardModule} from "@angular/material/card";


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

  subjectList: Subject[] = []

  isMobile!: boolean
  private subscription!: Subscription


  constructor(
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private assignmentService: AssignmentService,
    private subjectService: SubjectService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {
  }


  ngOnInit(): void {

    this.subjectService.getSubjects().subscribe(response => {
      if (response.status == 200) {

        this.subjectList = response.data!

      } else {
        this.snackbarService.showAlert(response.message)
      }

    })

    this.subscription = this.sharedService.isMobileObservable.subscribe(isMobile => {
      this.isMobile = isMobile
    })

  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }


  onSubmit() {

    // on crée un nouvel assignment
    let newAssignment = new Assignment()

    newAssignment.title = this.firstFormGroup.value.title!
    newAssignment.subject = this.firstFormGroup.value.subject!
    newAssignment.remark = ""

    newAssignment.confirm = false
    newAssignment.score = 0



    // on utilise le service pour directement ajouter
    // le nouvel assignment dans le tableau
    this.assignmentService
      .addAssignment(newAssignment)
      .subscribe((reponse) => {

        console.log(reponse)


        this.snackbarService.action(reponse, '/assignment/list/1/20', "Assignment Created")

      })
  }
}
