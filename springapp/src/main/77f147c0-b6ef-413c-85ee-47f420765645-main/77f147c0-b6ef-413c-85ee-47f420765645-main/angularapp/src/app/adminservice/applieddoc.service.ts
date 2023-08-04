import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applieddoc } from './applieddoc';


@Injectable({
  providedIn: 'root'
})
export class ApplieddocService {
  private url ='https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/admin/appliedDocuments'


  constructor(private httpclient:HttpClient) { }

  getAllAppliedProfile(): Observable<Applieddoc[]> {
    return this.httpclient.get<Applieddoc[]>(this.url);
  }
  getProfile(id:number) {
    console.log(id);
    return this.httpclient.get<Applieddoc>(`https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/admin/getProfile/${id}`); // Replace '1' with the actual user ID
  }
  approveProfile(id: number): Observable<Applieddoc> {
    const url = `https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/admin/getProfile/${id}/approve`;
    return this.httpclient.put<Applieddoc>(url, null);
  }
  rejectProfile(id: number): Observable<Applieddoc> {
    const url = `https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/admin/getProfile/${id}/reject`;
    return this.httpclient.put<Applieddoc>(url, null);
  }
  downloadImageByProfileId(id: number): Observable<HttpResponse<Blob>> {
    const url = `https://8080-faafcafbddfacbdcaababfebeecbbaefdfd.project.examly.io/admin/getDocuments/profile/${id}`;
    return this.httpclient.get(url, { observe: 'response', responseType: 'blob' });
  }
}
