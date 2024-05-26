import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Assignment} from "../model/assignment.model";
import {Observable, of} from "rxjs";
import {assignmentList} from "../model/data/data";
import {IResponseType} from "../utils/interface";
import {baseUrl} from "../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  assignments: Assignment[] = [];

  base_api = '/api/assignments';

  constructor(private http: HttpClient) {
    this.assignments = assignmentList;
  }


  // renvoie un assignment par son id, renvoie undefined si pas trouvé
  getAssignment(_id: string): Observable<IResponseType<Assignment>> {

    /*
    const uri = this.base_api + "/" + _id;
    return this.http.get<IResponseType<Assignment>>(baseUrl(uri));
  */

    let
      assignment = this.assignments.find((a) => a._id === _id);

    const iResponseType: IResponseType<Assignment> = {
      status: assignment ? 200 : 404,
      message: assignment ? 'success' : 'not found',
      data: assignment,
    };

    return of(iResponseType);

  }

  updateAssignment(assignment: Assignment): Observable<any> {
    // l'assignment passé en paramètre est le même objet que dans le tableau
    // plus tard on verra comment faire avec une base de données
    // il faudra faire une requête HTTP pour envoyer l'objet modifié

    const uri = this.base_api;
    return this.http.put<Assignment>(baseUrl(uri), assignment);
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
    };
    return of(iResponseType);
  }

  deleteAssignment(idAssignment: string): Observable<IResponseType<string>> {
    // on va supprimer l'assignment dans le tableau

    //return of("Assignment supprimé avec succès");
    /*const uri = this.base_api + '/' + idAssignment;
    return this.http.delete<IResponseType<string>>(baseUrl(uri));*/

    const iResponseType: IResponseType<string> = {
      status: 204,
      message: 'success',
      data: 'delete',
    };

    return of(iResponseType);
  }

}