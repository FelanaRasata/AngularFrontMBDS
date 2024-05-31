import {Component, OnInit} from '@angular/core'
import {MatListModule} from '@angular/material/list'
import {Router, RouterLink} from '@angular/router'
import {MatDialog} from '@angular/material/dialog'
import {SignOutComponent} from '@pages/user/sign-out/sign-out.component'
import {AuthService} from '@shared/core/services/auth.service'
import {EAssignmentLink, EUserRole} from '@shared/core/types/enums'
import {ProfileComponent} from "@pages/user/profile/profile.component";
import {LoaderService} from "@shared/core/services/loader.service";


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatListModule,
    RouterLink,

  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  disabled = true
  protected readonly EAssignmentLink = EAssignmentLink;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService
  ) {
  }

  ngOnInit() {

    this.authService.isAuthorized(EUserRole.tr)
      .then(role => {
        this.disabled = !role
      })

  }

  openDialog() {
    const dialogRef = this.dialog.open(SignOutComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.loaderService.hydrate(true)
      if (result) {
        this.authService.signOut()
        this.router.navigate([EAssignmentLink.root], {
          state: {
            message: 'You logged out 😥',
          }
        })
        this.loaderService.hydrate(false)
      }
    })
  }

  openProfile() {
    const dialogRef = this.dialog.open(ProfileComponent)

    dialogRef.afterClosed().subscribe()
  }
}
