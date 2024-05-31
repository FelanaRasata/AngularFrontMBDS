import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import {
  IPaginationData,
  IPaginationResult,
  IResponseType,
} from '../types/interfaces';
import { baseUrl, isEmpty } from '../utils/utils';
import { IAssignment } from '../models/entities/assignment.model';
import { ApiService } from '@shared/core/services/api.service';
import { PaginationService } from '@shared/core/services/pagination.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EAssignmentLink } from '@shared/core/types/enums';
import { Router } from '@angular/router';
import { SnackbarService } from '@shared/core/services/snackbar.service';
import { LoaderService } from '@shared/core/services/loader.service';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  endpoint: string = 'assignments';

  assignment: BehaviorSubject<IAssignment | null> =
    new BehaviorSubject<IAssignment | null>(null);

  assignments: BehaviorSubject<IAssignment[]> = new BehaviorSubject<
    IAssignment[]
  >([]);
  confirmedAssignments: BehaviorSubject<IAssignment[]> = new BehaviorSubject<
    IAssignment[]
  >([]);
  notConfirmedAssignments: BehaviorSubject<IAssignment[]> = new BehaviorSubject<
    IAssignment[]
  >([]);

  assignmentsPaginationData: BehaviorSubject<IPaginationData> =
    new BehaviorSubject<IPaginationData>({
      page: 1,
      limit: 1,
      totalItems: 1,
    });

  confirmedAssignmentsPaginationData: BehaviorSubject<IPaginationData> =
    new BehaviorSubject<IPaginationData>({
      page: 1,
      limit: 1,
      totalItems: 1,
    });

  notConfirmedAssignmentsPaginationData: BehaviorSubject<IPaginationData> =
    new BehaviorSubject<IPaginationData>({
      page: 1,
      limit: 1,
      totalItems: 1,
    });

  constructor(
    private apiService: ApiService,
    private paginationService: PaginationService,
    private router: Router,
    private snackbarService: SnackbarService,
    private loaderService: LoaderService
  ) {}

  getFilteredAssignmentList(
    page: number,
    limit: number,
    confirmed: boolean,
    add: boolean = false
  ): Observable<string | null> {
    let uri = this.endpoint + '?page=' + page + '&limit=' + limit;

    if (!isEmpty(confirmed)) uri += '&confirmed=' + confirmed;

    this.loaderService.hydrate(true);

    return new Observable<string | null>((subscriber) => {
      this.apiService
        .get<IPaginationResult<IAssignment[]>>(baseUrl(uri))
        .subscribe((response) => {
          if (response.status === 200) {
            if (confirmed) {
              if (add)
                this.confirmedAssignments.next([
                  ...this.confirmedAssignments.value,
                  ...response.data.items,
                ]);
              else this.confirmedAssignments.next(response.data.items);

              this.paginationService.setPaginationData(
                response.data.paginator,
                this.confirmedAssignmentsPaginationData
              );
            } else {
              if (add)
                this.notConfirmedAssignments.next([
                  ...this.notConfirmedAssignments.value,
                  ...response.data.items,
                ]);
              else this.notConfirmedAssignments.next(response.data.items);

              this.paginationService.setPaginationData(
                response.data.paginator,
                this.notConfirmedAssignmentsPaginationData
              );
            }

            this.loaderService.hydrate(false);
            subscriber.next(null);
          } else {
            subscriber.next(response.message);
          }

          subscriber.complete();
        });
    });
  }

  getAssignmentList(
    page: number,
    limit: number,
    search: string = ''
  ): Observable<string | null> {
    let uri =
      this.endpoint + '?page=' + page + '&limit=' + limit + '&search=' + search;

    this.loaderService.hydrate(true);
    return new Observable<string | null>((subscriber) => {
      this.apiService
        .get<IPaginationResult<IAssignment[]>>(baseUrl(uri))
        .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)))
        .subscribe((response) => {
          if (response.status === 200) {
            this.assignments.next(response.data.items);
            this.paginationService.setPaginationData(
              response.data.paginator,
              this.assignmentsPaginationData
            );
            subscriber.next(null);
          } else {
            subscriber.next(response.message);
          }

          this.loaderService.hydrate(false);
          subscriber.complete();
        });
    });
  }

  // renvoie un assignment par son id, renvoie undefined si pas trouvé
  getAssignment(_id: string): Observable<string | null> {
    const uri = this.endpoint + '/' + _id;
    this.loaderService.hydrate(true);
    return new Observable<string | null>((subscriber) => {
      this.apiService
        .get<IAssignment>(baseUrl(uri))
        .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)))
        .subscribe((response) => {
          if (response.status === 200) {
            this.assignment.next(response.data);
            subscriber.next(null);
          } else {
            subscriber.next(response.message);
          }
          this.loaderService.hydrate(false);
          subscriber.complete();
        });
    });
  }

  // On a l'ID de l'assignment s'il est bien modifié
  updateAssignment(assignment: IAssignment): Observable<string | null> {
    const uri = this.endpoint + '/' + assignment._id;
    this.loaderService.hydrate(true);
    return new Observable<string | null>((subscriber) => {
      this.apiService
        .put<null>(baseUrl(uri), assignment)
        .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)))
        .subscribe((response) => {
          if (response.status === 204) {
            this.assignment.next(null);
            subscriber.next(null);
          } else {
            subscriber.next(response.message);
          }
          this.loaderService.hydrate(false);
          subscriber.complete();
        });
    });
  }

  // ajoute un assignment et retourne une confirmation
  addAssignment(assignment: IAssignment): Observable<string | null> {
    // return this.http.post<IResponseType<Assignment>>(baseUrl(uri), assignment);

    const uri = this.endpoint;
    this.loaderService.hydrate(true);
    return new Observable<string | null>((subscriber) => {
      this.apiService
        .post<null>(baseUrl(uri), assignment)
        .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)))
        .subscribe((response) => {
          if (response.status === 201) {
            this.assignment.next(response.data!);
            subscriber.next(null);
          } else {
            subscriber.next(response.message);
          }

          this.loaderService.hydrate(false);
          subscriber.complete();
        });
    });
  }

  deleteAssignment(idAssignment: string): Observable<IResponseType<null>> {
    // on va supprimer l'assignment dans le tableau

    //return of("Assignment supprimé avec succès");
    const uri = this.endpoint + '/' + idAssignment;
    return this.apiService.delete<null>(baseUrl(uri));
  }

  public handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.status == 401) {
      // Client-side or network error
      this.router.navigate([EAssignmentLink.root], {
        state: {
          message: 'Session expired',
        },
      });
    } else {
      // Backend error
      this.snackbarService.showAlert(
        `Server returned code: ${error.status}, error message is: ${error.message}`
      );
    }

    // Log the error to the console (you can also log it to a remote server)
    console.error(errorMessage);

    // Return an observable with a user-facing error message
    return throwError(() => new Error(errorMessage));
  }
}
