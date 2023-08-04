import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  


  login:Login = new Login ();
  private currentUser: any;

  private baseurl1='http://localhost:8080/user/login'

  constructor(private httpclient:HttpClient) { }
  
  loginUser(login:Login): Observable<Object>{
    return this.httpclient.post(`${this.baseurl1}`, login);
  }

  
}
