import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { IResponseType } from '../utils/interface'
import { userList } from '../model/data/data'
import { User } from '../model/user.model'
import { baseUrl } from '../utils/utils'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_api = '/api/users'


  constructor(private http: HttpClient) {
  }


  /*
   * signIn : Fonction d'authentification de l'utilisateur
   * email : le courrier de l'utilisateur
   * password : le mot de passe de l'utilisateur
   * role : Etudiant ou Professeur
   * return string : le token identifiant l'utilisateur
   */
  signIn(email: string, password: string, role: string): Observable<IResponseType<string>> {

    /*
     const uri = this.base_api + "/" + email + "/" + password + "/" + role;
     return this.http.get<IResponseType<string>>(baseUrl(uri))
     */

    const user = userList.find(a => {
      return a.username === email && a.role === role
    })

    const iResponseType: IResponseType<string> = {
      status: user ? 200 : 404,
      message: user ? 'success' : 'Not Found',
      data: user?.role + '-' + user?.username,
    }

    return of(iResponseType)

  }


  /*
   * getUserByToken : chercher l'utilisateur par rapport à son token
   * token : le token correspondant l'utilisateur
   * return User : l'utilisateur  identifié par le token
   */
  getUserByToken(token: string): Observable<IResponseType<User>> {

    const uri = this.base_api + '/' + token
    return this.http.get<IResponseType<User>>(baseUrl(uri))

  }
}
