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

  isLogged(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      resolve(this.getToken() != "");
    });
  }

  isAuthorized(role: string): Promise<boolean> {
    const roleIndex = this.getAuthorization()
    const roleValue = Role[roleIndex as keyof typeof Role];

    return new Promise((resolve, reject) => {
      resolve(role == roleValue);
    });

  }

  signOut(){
    localStorage.removeItem('token')
  }
}
