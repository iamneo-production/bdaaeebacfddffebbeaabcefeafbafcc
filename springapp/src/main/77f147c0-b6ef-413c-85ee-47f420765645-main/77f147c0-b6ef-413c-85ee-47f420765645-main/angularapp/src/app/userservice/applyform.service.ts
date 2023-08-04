import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Applyform } from './applyform';
@Injectable({
  providedIn: 'root'
})
export class ApplyformService {

  private baseurl='https://8080-adbfbfdfacbdcaababfebeecbbaefdfd.project.examly.io/customer/addProfile'
  private baseurl1='https://8080-adbfbfdfacbdcaababfebeecbbaefdfd.project.examly.io/customer/getProfileByEmail'
  
  constructor(private httpclient:HttpClient) { }

  applyNewcard(formData): Observable<Object>{
    return this.httpclient.post(`${this.baseurl}`, formData);
  }
  getProfileByEmail(email: string) {
    return this.httpclient.get<Applyform>(`${this.baseurl1}/${email}`);
  }
}
