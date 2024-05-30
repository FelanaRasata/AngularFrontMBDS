import {Component} from '@angular/core'
import {MatListModule} from '@angular/material/list'
import {Router, RouterLink} from '@angular/router'
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../shared/services/auth.service";
import {SignOutComponent} from "../../pages/user/sign-out/sign-out.component";


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
export class SidebarComponent {

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignOutComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.signOut()
        this.router.navigate(["/"], {
          state: {
            message: "You logged out 😥",
          }
        })
      }
    })
  }
}
