import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Assignment} from '../model/assignment.model'
import {Observable, of} from 'rxjs'
import {IResponseType, PaginationResult} from '../utils/interface'
import {baseUrl} from '../utils/utils'


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  base_api = 'assignments'


  constructor(private http: HttpClient) {
  }

  getAssignmentList(
    page: number,
    limit: number
  ): Observable<IResponseType<PaginationResult<Assignment[]>>> {

    const uri = this.base_api + "?page=" + page + "&limit=" + limit;
    return this.http.get<IResponseType<PaginationResult<Assignment[]>>>(baseUrl(uri));

  }

  // renvoie un assignment par son id, renvoie undefined si pas trouvé
  getAssignment(_id: string): Observable<IResponseType<Assignment>> {

    const uri = this.base_api + "/" + _id;
    return this.http.get<IResponseType<Assignment>>(baseUrl(uri));

  }

  // On a l' ID de l'assignment si il est bien modifier
  updateAssignment(assignment: Assignment): Observable<IResponseType<null>> {

    const uri = this.base_api + "/" + assignment._id
    return this.http.put<IResponseType<null>>(baseUrl(uri), assignment)

  }

  // ajoute un assignment et retourne une confirmation
  addAssignment(assignment: Assignment): Observable<IResponseType<Assignment>> {
    /*
        const uri = this.base_api;
        return this.http.post<IResponseType<Assignment>>(baseUrl(uri), assignment);
     */

    const iResponseType: IResponseType<Assignment> = {
      status: assignment ? 201 : 404,
      message: 'success',
      data: assignment,
    }
    return of(iResponseType)
  }

  deleteAssignment(idAssignment: string): Observable<IResponseType<null>> {
    // on va supprimer l'assignment dans le tableau

    //return of("Assignment supprimé avec succès");
    const uri = this.base_api + '/' + idAssignment;
    return this.http.delete<IResponseType<null>>(baseUrl(uri));


  }


}
