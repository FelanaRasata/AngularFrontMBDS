import {Component, OnDestroy, OnInit} from '@angular/core'
import {MatRadioModule} from '@angular/material/radio'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {Subscription} from 'rxjs'
import {NavigationEnd, Router} from '@angular/router'
import {EAssignmentLink, EUserRole} from '@shared/core/types/enums'
import {UserService} from '@shared/core/services/user.service'
import {SharedService} from '@shared/core/services/shared.service'
import {SnackbarService} from '@shared/core/services/snackbar.service'
import {AuthService} from '@shared/core/services/auth.service'
import {LoaderService} from "@shared/core/services/loader.service";


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

  username: string = 'plinfoot1@newsvine.com'
  password: string = 'pwd123'
  role: EUserRole = EUserRole.tr

  title: string = 'Assignment Management'

  isMobile!: boolean
  protected readonly Role = EUserRole
  private subscription!: Subscription


  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private snackbarService: SnackbarService,
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService
  ) {
  }


  ngOnInit(): void {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {

        const navigation = this.router.getCurrentNavigation()
        const state = navigation?.extras.state as { message?: string }

        if (state?.message) {
          this.snackbarService.showAlert(state.message, 'Close')
        }

      }

    })

    this.role = EUserRole.tr

    // Take the variable which see if the device is a mobile or not
    this.subscription = this.sharedService.isMobileObservable
      .subscribe(isMobile => {

        this.isMobile = isMobile

      })

  }


  signIn(): void {

    // Connection with back-end
    this.loaderService.hydrate(true)
    this.userService.signIn(this.username, this.password, this.role)
      .subscribe((response) => {

        let message = response.message
        if (response.status == 201) {
          this.authService.setToken(response.data)
          message = ""
        }

        this.snackbarService.action(message, EAssignmentLink.list)
        this.loaderService.hydrate(false)

      })

  }


  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe()

    }

  }
}
