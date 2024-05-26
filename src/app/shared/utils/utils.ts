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

export function getToken() {

  const user: string = localStorage.getItem('user')!
  return user ? user : null

}


// index in array of roles: 0= Teacher | 1= Student
export function hasPermission(index: number) {

  const token = getToken()
  return !!token?.includes(roleList[index] + '-')

}


export const roleList: string[] = ['TEACHER', 'STUDENT']


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
