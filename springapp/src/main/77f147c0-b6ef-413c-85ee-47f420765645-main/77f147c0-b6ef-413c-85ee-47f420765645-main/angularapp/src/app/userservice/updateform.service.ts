import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applyform } from './applyform';

@Injectable({
  providedIn: 'root'
})
export class UpdateformService {

  private baseurl='https://8080-faedbefabcfcbbeadacbdcaababfebeedcefbdfdacea.project.examly.io/customer/getProfileByEmail'
  private baseurl2='https://8080-faedbefabcfcbbeadacbdcaababfebeedcefbdfdacea.project.examly.io/customer/editProfile'
  
  constructor(private httpclient:HttpClient) { }


  updateUser(email: string, formData): Observable<Object> {
    const url = `${this.baseurl2}/${email}`;
    return this.httpclient.put(url, formData);
  }
  getProfileByEmail(email: string) {
    return this.httpclient.get<Applyform>(`${this.baseurl}/${email}`);
  }
  getProfile(id: number) {
    return this.httpclient.get<Applyform>(`${this.baseurl}/${id}`);
  }
  
}
