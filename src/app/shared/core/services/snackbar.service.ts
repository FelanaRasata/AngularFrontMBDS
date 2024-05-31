import {Injectable} from '@angular/core'
import {MatSnackBar} from '@angular/material/snack-bar'
import {Router} from '@angular/router'
import {isEmpty} from "@shared/core/utils/utils";


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  duration: number = 5000


  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }


  action(errorMessage: string | null, link: string, message: string = '') {

    if (!isEmpty(errorMessage))
      this.showAlert(String(errorMessage))
    else {
      this.router.navigate([link], {
        state: {
          message: message
        }
      })
    }

  }


  // Code ChatGPT
  showAlert(message: string, action: string = 'Close') {

    const duration = this.duration

    this.snackBar.open(message, action, {

      duration,

    })

  }

}
