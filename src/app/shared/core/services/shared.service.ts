import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable, throwError} from 'rxjs'
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {SnackbarService} from "@shared/core/services/snackbar.service";
import {EAssignmentLink} from "@shared/core/types/enums";


// Code ChatGPT
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isMobileSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isMobileObservable: Observable<boolean> = this.isMobileSource.asObservable()

  constructor() {
  }

  setIsMobile(isMobile: boolean) {
    this.isMobileSource.next(isMobile)
  }


}


