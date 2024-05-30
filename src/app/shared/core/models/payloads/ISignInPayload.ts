import { EUserRole } from '../../types/enums'


export interface ISignInPayload {
  username: string
  password: string
  role: EUserRole
}
