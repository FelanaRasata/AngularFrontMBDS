import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatRadioModule } from '@angular/material/radio'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { UserService } from '../../../shared/services/user.service'
import { Router } from '@angular/router'
import { roleList } from '../../../shared/utils/utils'
import { Subscription } from 'rxjs'
import { SharedService } from '../../../shared/services/shared.service'


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
  password: string = ''
  role: string = ''

  title: string = 'Assignment Management'

  roleList!: string[]

  isMobile!: boolean
  private subscription!: Subscription


  constructor(
    private userService: UserService,
    private router: Router,
    private sharedService: SharedService
  ) {
  }


  ngOnInit(): void {

    this.roleList = roleList
    this.role = this.roleList[0]

    // Take the variable which see if the device is a mobile or not
    this.subscription = this.sharedService.isMobileObservable.subscribe(
      isMobile => {

        this.isMobile = isMobile

      })

  }


  signIn(): void {

    // Connection with back-end
    this.userService.signIn(this.username, this.password, this.role).subscribe((data) => {

      console.log('Données arrivées')

      if (data.status) {

        localStorage.setItem('user', data.data!)
        this.router.navigate(['assignment/list', 0, 10]).then(r => console.log('Signed In'))

      } else {

        console.log('Username error')

      }

    })

  }


  ngOnDestroy(): void {

    if (this.subscription) {

      this.subscription.unsubscribe()

    }

  }

}
