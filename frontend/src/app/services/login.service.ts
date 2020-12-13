import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginUser} from "../models/loginUser";
import {AuthToken} from "../models/auth.token";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginsUrl = '/api/logins';

  constructor(private http: HttpClient) {}

  public generateToken(loginUser: LoginUser): Observable<AuthToken> {
    return this.http.post<AuthToken>("/api/token/generate-token", loginUser);
  }

  public register(login: Login): Observable<Login> {
    return this.http.post<Login>(this.loginsUrl + '/signup', login);
  }

  public getLoginByEmail(email: string): Observable<Login> {
    return this.http.get<Login>(this.loginsUrl + '/login/' + email);
  }
}
