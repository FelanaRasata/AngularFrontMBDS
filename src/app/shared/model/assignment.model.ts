import { User } from './user.model'
import { Subject } from './subject.model'


export class Assignment {

  _id?: string

  title!: string

  student!: User

  subject!: Subject

  dateSending?: Date

  score?: number

  remark?: string

  confirm?: boolean

}
