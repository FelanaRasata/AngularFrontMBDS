export interface IResponseType<T> {

  status: number

  message: string

  data?: T

}


export interface IPaginationResult<T> {

  items?: T

  paginator: IPaginator

}


export interface IPaginator {

  totalItems: number

  itemsPerPage: number

  page: number

  totalPages: number

  pagingCounter: number

  hasPrevPage: boolean

  hasNextPage: boolean

  prevPage: boolean | null

  nextPage: boolean | null

}


export interface IPaginationData {

  page: number;

  limit: number;

  totalItems: number;

}
