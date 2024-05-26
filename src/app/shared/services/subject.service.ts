import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "../model/subject.model";
import {Observable, of} from "rxjs";
import {IResponseType} from "../utils/interface";
import {subjectList} from "../model/data/data";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  base_api = "/api/subjects";

  constructor(private http: HttpClient) {
  }

  getSubjects(): Observable<IResponseType<Subject[]>> {

    /*const uri = this.base_api;
    return this.http.get<IResponseType<Subject[]>>(baseUrl(uri));*/


    const iResponseType: IResponseType<Subject[]> = {
      status: subjectList ? 200 : 404,
      message: subjectList ? 'success' : 'Not Found',
      data: subjectList,
    };

    return of(iResponseType);

  }


}
