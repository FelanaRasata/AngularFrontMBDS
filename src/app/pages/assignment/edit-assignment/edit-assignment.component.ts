import {Component, OnDestroy, OnInit} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatStepperModule} from '@angular/material/stepper'
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {TitlePageComponent} from '../../components/title-page/title-page.component'
import {Subscription} from 'rxjs'
import {SharedService} from '../../../shared/services/shared.service'
import {AssignmentService} from '../../../shared/services/assignment.service'
import {ActivatedRoute} from '@angular/router'
import {provideNativeDateAdapter} from '@angular/material/core'
import {Assignment} from '../../../shared/model/assignment.model'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {SnackbarService} from '../../../shared/services/snackbar.service'


@Component({
  selector: 'app-edit-assignment',
  providers: [provideNativeDateAdapter()],
  standalone: true,
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
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './edit-assignment.component.html',
  styleUrl: './edit-assignment.component.css'
})
export class EditAssignmentComponent implements OnInit, OnDestroy {

  title = 'Edit assignment'

  assignmentSent!: Assignment | undefined

  // champs du formulaire
  firstFormGroup: any

  secondFormGroup: any

  isMobile!: boolean
  private subscription!: Subscription


  constructor(
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService
  ) {
  }


  ngOnInit(): void {

    const id = this.route.snapshot.params['id']

    // On utilise le service pour récupérer l'assignment avec cet id
    this.assignmentService.getAssignment(id).subscribe((data) => {

      if (data.status == 200) {

        this.assignmentSent = data.data!

        this.firstFormGroup = this._formBuilder.group({

          title: [{value: this.assignmentSent.title, disabled: this.assignmentSent.confirm}, Validators.required],

          student: [{value: this.assignmentSent.student?.name, disabled: true}, Validators.required],

          dateSending: [{
            value: this.assignmentSent.dateSending,
            disabled: this.assignmentSent.confirm
          }, Validators.required],

        })

        this.secondFormGroup = this._formBuilder.group({

          subject: [{value: this.assignmentSent.subject?.title, disabled: true}, Validators.required],

          score: [{value: this.assignmentSent.score, disabled: this.assignmentSent.confirm}, Validators.required],

          remark: [{value: this.assignmentSent.remark, disabled: this.assignmentSent.confirm},],

          confirm: [{value: this.assignmentSent.confirm, disabled: this.assignmentSent.confirm},],

        })

        if (this.assignmentSent.confirm) {
          this.snackbarService.showAlert('✔ This assignment is already confirmed ')
        }


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

    // on crée un nouveau assignment qui va porter les modifications
    let updateAssignment = new Assignment()

    updateAssignment._id = this.assignmentSent?._id!

    updateAssignment.title = this.firstFormGroup.value.title!
    updateAssignment.dateSending = this.firstFormGroup.value.dateSending!
    updateAssignment.student = this.assignmentSent?.student!

    updateAssignment.subject = this.assignmentSent?.subject!
    updateAssignment.remark = this.secondFormGroup.value.remark!
    updateAssignment.confirm = this.secondFormGroup.value.confirm!
    updateAssignment.score = this.secondFormGroup.value.score!


    // on utilise le service pour directement ajouter
    // le nouvel assignment dans le tableau
    this.assignmentService
      .updateAssignment(updateAssignment)
      .subscribe((reponse) => {
        const link = '/assignment/' + updateAssignment._id + '/detail'
        this.snackbarService.action(reponse, link, "Assignment Updated")

      })
  }
}
