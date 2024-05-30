import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IResponseType } from '../types/interfaces'
import { baseUrl } from '../utils/utils'
import { ISubject } from '@shared/core/models/entities/subject.model'
import { ApiService } from '@shared/core/services/api.service'


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  base_api = 'subjects'


  constructor(
    private apiService: ApiService,
  ) {
  }


  getSubjects(): Observable<IResponseType<ISubject[]>> {

    const uri = this.base_api
    return this.apiService.get<ISubject[]>(baseUrl(uri))

  }

}
