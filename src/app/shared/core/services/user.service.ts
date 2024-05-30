import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IResponseType } from '../types/interfaces'
import { IUser } from '../models/entities/user.model'
import { baseUrl } from '../utils/utils'
import { ApiService } from './api.service'
import { ISignInPayload } from '../models/payloads/ISignInPayload'
import { EUserRole } from '../types/enums'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'users'

  constructor(
    private apiService: ApiService,
  ) {
  }


  /*
   * signIn : Fonction d'authentification de l'utilisateur
   * email : le courrier de l'utilisateur
   * password : le mot de passe de l'utilisateur
   * role : Étudiant ou Professeur
   * return string : le token identifiant l'utilisateur
   */
  signIn(email: string, password: string, role: EUserRole): Observable<IResponseType<string>> {

    const signInPayload: ISignInPayload = {
      username: email,
      password: password,
      role: role
    }

    const uri = this.endpoint + '/login'

    return this.apiService.post<string>(baseUrl(uri), signInPayload)

  }


  /*
   * getUserByToken : chercher l'utilisateur par rapport à son token
   * token : le token correspondant l'utilisateur
   * return User : l'utilisateur  identifié par le token
   */
  getUserByToken(): Observable<IResponseType<IUser>> {

    const uri = this.endpoint
    return this.apiService.get<IUser>(baseUrl(uri))

  }

}
