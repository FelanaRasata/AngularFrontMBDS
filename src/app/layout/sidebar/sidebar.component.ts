import { Component, OnInit } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { Router, RouterLink } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { SignOutComponent } from '@pages/user/sign-out/sign-out.component'
import { AuthService } from '@shared/core/services/auth.service'
import { EUserRole } from '@shared/core/types/enums'


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


  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
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
      if (result) {
        this.authService.signOut()
        this.router.navigate(['/'], {
          state: {
            message: 'You logged out 😥',
          }
        })
      }
    })
  }
}
