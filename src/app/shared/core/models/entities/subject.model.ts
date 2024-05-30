import { IUser } from './user.model'
import { IBaseModel } from './base.model'


export interface ISubject extends IBaseModel {

  title: string

  image: string

  teacher: IUser

}
