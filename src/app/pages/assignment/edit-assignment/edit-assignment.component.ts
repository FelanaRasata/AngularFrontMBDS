import {Component, OnDestroy, OnInit} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatStepperModule} from '@angular/material/stepper'
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {TitlePageComponent} from '@shared/components/title-page/title-page.component'
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import {provideNativeDateAdapter} from '@angular/material/core'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {IAssignment} from '@shared/core/models/entities/assignment.model'
import {SharedService} from '@shared/core/services/shared.service'
import {AssignmentService} from '@shared/core/services/assignment.service'
import {SnackbarService} from '@shared/core/services/snackbar.service'
import {ISubject} from '@shared/core/models/entities/subject.model'
import {isEmpty} from "@shared/core/utils/utils";


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

  // champs du formulaire
  firstFormGroup: any

  secondFormGroup: any

  isMobile!: boolean

  private subscription!: Subscription


  constructor(
    private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    public assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService
  ) {
  }


  ngOnInit(): void {

    const id = this.route.snapshot.params['id']

    // On utilise le service pour récupérer l'assignment avec cet id
    this.assignmentService.getAssignment(id).subscribe((message) => {

      if (!isEmpty(message))
        this.snackbarService.showAlert(String(message))


      this.firstFormGroup = this._formBuilder.group({

        title: [{
          value: this.assignmentService.assignment.value?.title,
          disabled: this.assignmentService.assignment.value?.confirm
        }, Validators.required],

        student: [{value: this.assignmentService.assignment.value?.student?.name, disabled: true}, Validators.required],

        dateSending: [{
          value: this.assignmentService.assignment.value?.dateSending,
          disabled: this.assignmentService.assignment.value?.confirm
        }, Validators.required],

      })

      this.secondFormGroup = this._formBuilder.group({

        subject: [{
          value: (<ISubject>this.assignmentService.assignment.value?.subject).title,
          disabled: true
        }, Validators.required],

        score: [{
          value: this.assignmentService.assignment.value?.score,
          disabled: this.assignmentService.assignment.value?.confirm
        }, Validators.required],

        remark: [{
          value: this.assignmentService.assignment.value?.remark,
          disabled: this.assignmentService.assignment.value?.confirm
        },],

        confirm: [{
          value: this.assignmentService.assignment.value?.confirm,
          disabled: this.assignmentService.assignment.value?.confirm
        },],

      })

      if (this.assignmentService.assignment.value?.confirm) {
        this.snackbarService.showAlert('✔ This assignment is already confirmed ')
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
    const updateAssignment: IAssignment = {
      _id: this.assignmentService.assignment.value?._id!,
      title: this.firstFormGroup.value.title!,
      dateSending: this.firstFormGroup.value.dateSending!,
      student: this.assignmentService.assignment.value?.student!,
      subject: this.assignmentService.assignment.value?.subject!,
      remark: this.secondFormGroup.value.remark!,
      confirm: this.secondFormGroup.value.confirm!,
      score: this.secondFormGroup.value.score!,
    }

    // on utilise le service pour directement ajouter
    // le nouvel assignment dans le tableau
    this.assignmentService
      .updateAssignment(updateAssignment)
      .subscribe((message) => {

        const link = '/assignment/' + updateAssignment._id + '/detail'

        this.snackbarService.action(message, link, 'Assignment Updated')

      })

  }

}
