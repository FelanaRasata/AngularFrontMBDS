import { IUser } from './user.model'
import { ISubject } from './subject.model'
import { IBaseModel } from './base.model'


export interface IAssignment extends IBaseModel {

  _id?: string

  title: string

  student?: IUser

  subject: ISubject

  dateSending?: Date

  score?: number

  remark?: string

  confirm?: boolean

}
