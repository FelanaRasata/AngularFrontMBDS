import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {IResponseType} from '../utils/interface'
import {User} from '../model/user.model'
import {baseUrl} from '../utils/utils'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_api = 'users'


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

    const body = {
      username: email,
      password: password,
      role: role
    }

    const uri = this.base_api + "/login"
    return this.http.post<IResponseType<string>>(baseUrl(uri), body)

  }


  /*
   * getUserByToken : chercher l'utilisateur par rapport à son token
   * token : le token correspondant l'utilisateur
   * return User : l'utilisateur  identifié par le token
   */
  getUserByToken(): Observable<IResponseType<User>> {

    const uri = this.base_api
    return this.http.get<IResponseType<User>>(baseUrl(uri))

  }
}
