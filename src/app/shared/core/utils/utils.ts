import { environment } from '../../../../environment/environment'
import { map, Observable, of } from 'rxjs'


export const baseUrl = (urlPart: string): string => {
  return environment.apiUrl + urlPart
}


export const isEmpty = (value: any): boolean => {

  return (
    value === null || // check for null
    value === undefined || // check for undefined
    value === '' || // check for empty string
    (Array.isArray(value) && value.length === 0) || // check for empty array
    (typeof value === 'object' && Object.keys(value).length === 0) // check for empty object
  )

}


export const reqDataToObservable = (data: object | Observable<any>) => {

  if (data instanceof Observable) {

    return data.pipe(map(d => d.data))

  } else {

    return of(data)

  }

}
