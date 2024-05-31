import {AfterViewInit, Component} from '@angular/core';
import {UserService} from "@shared/core/services/user.service";
import {isEmpty} from "@shared/core/utils/utils";
import {SnackbarService} from "@shared/core/services/snackbar.service";
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements AfterViewInit {

  constructor(
    public userService: UserService,
    private snackbarService: SnackbarService,
  ) {
  }

  ngAfterViewInit() {
    this.userService.getUserByToken()
      .subscribe(message => {

        if (!isEmpty(message))
          this.snackbarService.showAlert(String(message))


      })

  }
}
