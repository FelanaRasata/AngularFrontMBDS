import {Injectable} from '@angular/core';
import {Role} from "../utils/role";

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
    if (token == null)
      return ""
    return token.slice(0, -2)
  }

  getAuthorization(): string {
    const token = localStorage.getItem('token')
    if (token == null)
      return ""
    return token.slice(-2)
  }

  isLogged() {

    const promise = new Promise((resolve, reject) => {
      resolve(this.getToken() != "");
    });

    return promise;
  }

  isAuthorized(role: string): boolean {

    const roleIndex = this.getAuthorization()
    const roleValue = Role[roleIndex as keyof typeof Role];
    return role == roleValue;

  }
}
