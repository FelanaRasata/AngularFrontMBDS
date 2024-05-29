import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { IResponseType } from '../utils/interface'
import { Router } from '@angular/router'
import {error} from "@angular/compiler-cli/src/transformers/util";


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  duration: number = 5000


  constructor(private snackBar: MatSnackBar, private router: Router) {
  }


  action(response: IResponseType<any>, link: string) {

    if (response.status == 204 || response.status == 200 || response.status == 201) {

      this.router.navigate([link], { state: { message: response.message } })

    }
    console.log("error" , response)

    if (response.status == 400 || response.status == 404) {
      this.showAlert(response.message, 'Close')

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
