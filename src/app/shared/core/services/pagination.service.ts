import { Injectable } from '@angular/core';
import { isEmpty } from '../utils/utils'
import { BehaviorSubject } from 'rxjs'
import { IPaginationData } from '../types/interfaces'

@Injectable({
  providedIn: 'root'
})
export class PaginationService {


  constructor() {
  }


  setPaginationData(meta: any, paginationData: BehaviorSubject<IPaginationData>): void {

    if (isEmpty(meta)) {

      meta.page = 1
      meta.itemsPerPage = 1
      meta.totalItems = 1

    } else {

      if (meta.page <= 0) {

        meta.page = 1

      }

      if (meta.itemsPerPage <= 0) {

        meta.itemsPerPage = 1

      }

      if (meta.totalItems <= 0) {

        meta.totalItems = 1

      }

    }

    const paginationInfos: IPaginationData = {
      limit: meta.itemsPerPage,
      page: meta.page,
      totalItems: meta.totalItems,
    }

    paginationData.next({...paginationInfos})

  }

}
