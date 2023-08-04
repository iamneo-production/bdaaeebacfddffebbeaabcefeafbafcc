import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSignup } from './user-signup';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {
  
  private baseurl='https://8080-caaeabbaebabdafacbdcaababfebeedcefbdfdacea.project.examly.io/user/signup'
  private baseurl1='https://8080-caaeabbaebabdafacbdcaababfebeedcefbdfdacea.project.examly.io/getAllUser'

  constructor(private httpclient:HttpClient) { }
  getUsers(): Observable<UserSignup[]> {
    return this.httpclient.get<UserSignup[]>(this.baseurl1);
  }

  registerUser(user:UserSignup): Observable<Object>{
    return this.httpclient.post(`${this.baseurl}`, user);
  }
}
