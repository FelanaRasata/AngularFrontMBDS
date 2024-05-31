import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {AssignmentService} from "@shared/core/services/assignment.service";
import {SnackbarService} from "@shared/core/services/snackbar.service";
import {Observable} from "rxjs";
import {isEmpty} from "@shared/core/utils/utils";
import {LoaderService} from "@shared/core/services/loader.service";

export const assignmentResolver: ResolveFn<boolean> = (route, state) => {
  const id = route.paramMap.get('id')

  const assignmentService = inject(AssignmentService)
  const snackbarService = inject(SnackbarService)
  const loaderService = inject(LoaderService)

  loaderService.hydrate(true)

  return new Observable<boolean>(subscriber => {
    assignmentService.getAssignment(id!)
      .subscribe(message => {

        if (!isEmpty(message)){
          snackbarService.showAlert(String(message))
          subscriber.next(false)

        } else {
          subscriber.next(true)
        }

        loaderService.hydrate(false)
        subscriber.complete()

      })
  })
};
