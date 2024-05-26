export interface IResponseType<T> {

  status: number;

  message: string;

  data?: T;

}


export interface PaginationResult<T> {

  docs: T;

  totalDocs: number;

  totalPages: number;

  currentPage: number;

  hasNextPage: boolean;

  hasPrevPage: boolean;

  nextPage: number | null;

  prevPage: number | null;

}


export interface Paginator {

  size: number;

  totalDocs: number;

  totalPages: number;

  currentPage: number;

  hasNextPage: boolean;

  hasPrevPage: boolean;

  nextPage: number | null;

  prevPage: number | null;

}
