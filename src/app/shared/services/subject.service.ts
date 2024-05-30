import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Subject} from '../model/subject.model'
import {Observable} from 'rxjs'
import {IResponseType, PaginationResult} from '../utils/interface'
import {baseUrl} from "../utils/utils";


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  base_api = 'subjects'


  constructor(private http: HttpClient) {
  }


  getSubjects(): Observable<IResponseType<Subject[]>> {

    const uri = this.base_api;
    return this.http.get<IResponseType<Subject[]>>(baseUrl(uri));

  }


}
