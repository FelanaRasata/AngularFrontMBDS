import { IBaseModel } from './base.model'


export interface IUser extends IBaseModel {

  role: string

  password?: string

  username: string

  name: string

}
