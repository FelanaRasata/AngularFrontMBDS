import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { IPaginationData, IPaginationResult, IResponseType } from '../types/interfaces'
import { baseUrl, isEmpty } from '../utils/utils'
import { IAssignment } from '../models/entities/assignment.model'
import { ApiService } from '@shared/core/services/api.service'
import { PaginationService } from '@shared/core/services/pagination.service'


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  endpoint: string = 'assignments'

  assignments: BehaviorSubject<IAssignment[]> = new BehaviorSubject<IAssignment[]>([])
  confirmedAssignments: BehaviorSubject<IAssignment[]> = new BehaviorSubject<IAssignment[]>([])
  notConfirmedAssignments: BehaviorSubject<IAssignment[]> = new BehaviorSubject<IAssignment[]>([])


  assignmentsPaginationData: BehaviorSubject<IPaginationData> = new BehaviorSubject<IPaginationData>({
    page: 1,
    limit: 1,
    totalItems: 1,
  })

  confirmedAssignmentsPaginationData: BehaviorSubject<IPaginationData> = new BehaviorSubject<IPaginationData>({
    page: 1,
    limit: 1,
    totalItems: 1,
  })

  notConfirmedAssignmentsPaginationData: BehaviorSubject<IPaginationData> = new BehaviorSubject<IPaginationData>({
    page: 1,
    limit: 1,
    totalItems: 1,
  })

  constructor(
    private apiService: ApiService,
    private paginationService: PaginationService,
  ) {
  }


  getFilteredAssignmentList(
    page: number,
    limit: number,
    confirmed: boolean
  ): Observable<string | null> {

    let uri = this.endpoint + '?page=' + page + '&limit=' + limit

    if (!isEmpty(confirmed))
      uri += '&confirmed=' + confirmed

    return new Observable<string | null>((subscriber) => {

      this.apiService.get<IPaginationResult<IAssignment[]>>(baseUrl(uri))
        .subscribe((response) => {

          if (response.status === 200) {

            if (confirmed) {
              this.confirmedAssignments.next(response.data.items)
              this.paginationService.setPaginationData(response.data.paginator, this.confirmedAssignmentsPaginationData)
            } else {
              this.notConfirmedAssignments.next(response.data.items)
              this.paginationService.setPaginationData(response.data.paginator, this.notConfirmedAssignmentsPaginationData)
            }

            subscriber.next(null)

          } else {

            subscriber.next(response.message)

          }

          subscriber.complete()

        })

    })

  }


  getAssignmentList(
    page: number,
    limit: number
  ): Observable<string | null> {

    let uri = this.endpoint + '?page=' + page + '&limit=' + limit

    return new Observable<string | null>((subscriber) => {

      this.apiService.get<IPaginationResult<IAssignment[]>>(baseUrl(uri))
        .subscribe((response) => {

          if (response.status === 200) {

            this.assignments.next(response.data.items)
            this.paginationService.setPaginationData(response.data.paginator, this.assignmentsPaginationData)
            subscriber.next(null)

          } else {

            subscriber.next(response.message)

          }

          subscriber.complete()

        })

    })

  }


  // renvoie un assignment par son id, renvoie undefined si pas trouvé
  getAssignment(_id: string): Observable<IResponseType<IAssignment>> {

    const uri = this.endpoint + '/' + _id
    return this.apiService.get<IAssignment>(baseUrl(uri))

  }


  // On a l'ID de l'assignment s'il est bien modifié
  updateAssignment(assignment: IAssignment): Observable<IResponseType<null>> {

    const uri = this.endpoint + '/' + assignment._id
    return this.apiService.put<null>(baseUrl(uri), assignment)

  }


  // ajoute un assignment et retourne une confirmation
  addAssignment(assignment: IAssignment): Observable<IResponseType<IAssignment>> {

    /*
        const uri = this.base_api;
        return this.http.post<IResponseType<Assignment>>(baseUrl(uri), assignment);
     */
    const iResponseType: IResponseType<IAssignment> = {
      status: assignment ? 201 : 404,
      message: 'success',
      data: assignment,
    }

    return of(iResponseType)

  }


  deleteAssignment(idAssignment: string): Observable<IResponseType<null>> {
    // on va supprimer l'assignment dans le tableau

    //return of("Assignment supprimé avec succès");
    const uri = this.endpoint + '/' + idAssignment
    return this.apiService.delete<null>(baseUrl(uri))

  }


}
