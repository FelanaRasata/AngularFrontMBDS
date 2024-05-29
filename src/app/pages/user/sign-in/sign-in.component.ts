import {Component, OnDestroy, OnInit} from '@angular/core'
import {MatRadioModule} from '@angular/material/radio'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {UserService} from '../../../shared/services/user.service'
import {Subscription} from 'rxjs'
import {SharedService} from '../../../shared/services/shared.service'
import {SnackbarService} from "../../../shared/services/snackbar.service";
import {AuthService} from "../../../shared/services/auth.service";
import {Role} from "../../../shared/utils/role";


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit, OnDestroy {

  hide: boolean = true

  username: string = 'btodarini0@smugmug.com'
  password: string = '123456789'
  role: string = ''

  title: string = 'Assignment Management'

  isMobile!: boolean
  private subscription!: Subscription


  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private snackbarService: SnackbarService,
    private authService: AuthService
  ) {
  }


  ngOnInit(): void {

    this.role = Role.tr

    // Take the variable which see if the device is a mobile or not
    this.subscription = this.sharedService.isMobileObservable.subscribe(
      isMobile => {

        this.isMobile = isMobile

      })

  }


  signIn(): void {

    // Connection with back-end
    this.userService.signIn(this.username, this.password, this.role).subscribe((response) => {

      console.log('Données arrivées')
      if (response.status == 201)
        this.authService.setToken(response.data)

      this.snackbarService.action(response, '/assignment/list/1/10')

    })

  }


  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe()

    }

  }

  protected readonly Role = Role;
}
