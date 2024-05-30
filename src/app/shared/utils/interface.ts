export interface IResponseType<T> {

  status: number

  message: string

  data?: T

}


export interface PaginationResult<T> {

  items?: T

  paginator: Paginator

}


export interface Paginator {

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
