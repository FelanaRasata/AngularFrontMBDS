import { environment } from '../../../environment/environment'


export const baseUrl = (urlPart: string): string => {
  return environment.apiUrl + urlPart
}


/*// Methode appelée par catchError, elle doit renvoyer
// i, Observable<T> où T est le type de l'objet à renvoyer
// (généricité de la méthode)
export function handleError<T>(operation: any, result?: T) {

  return (error: any): Observable<T> => {

    console.log(error); // pour afficher dans la console
    console.log(operation + ' a échoué ' + error.message);

    return of(result as T);

  }
}*/

/*export function paginationResultToPaginator<T>(paginationResult: PaginationResult<T>, size: number): Paginator {

  return {

    size: size,
    totalDocs: paginationResult.totalDocs,
    totalPages: paginationResult.totalPages,
    currentPage: paginationResult.currentPage,
    hasNextPage: paginationResult.hasNextPage,
    hasPrevPage: paginationResult.hasPrevPage,
    nextPage: paginationResult.nextPage,
    prevPage: paginationResult.prevPage

  };

}*/
