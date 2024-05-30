import { Injectable } from '@angular/core'
import { EUserRole } from '../types/enums'


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {
  }


  setToken(object: any) {
    let role = object.userRole

    role = (role[0] + role[role.length - 1]).toLowerCase()

    const token = object.token + role

    localStorage.setItem('token', token)
  }


  getToken(): string {

    const token = localStorage.getItem('token')

    return token === null ? '' : token.slice(0, -2)

  }


  getAuthorization(): string {

    const token = localStorage.getItem('token')

    return token === null ? '' : token.slice(-2)

  }


  isLogged(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      resolve(this.getToken() != '')
    })

  }


  isAuthorized(role: string): Promise<boolean> {

    const roleIndex = this.getAuthorization()
    const roleValue = EUserRole[roleIndex as keyof typeof EUserRole]

    return new Promise((resolve, reject) => {
      resolve(role === roleValue)
    })

  }


  signOut() {

    localStorage.removeItem('token')

  }

}
