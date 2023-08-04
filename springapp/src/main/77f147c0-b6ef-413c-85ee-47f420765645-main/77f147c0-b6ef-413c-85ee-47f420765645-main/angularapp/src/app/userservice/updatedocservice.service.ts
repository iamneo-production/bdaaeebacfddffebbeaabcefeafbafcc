import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatedocserviceService {

  private baseUrl = 'https://8080-adbfbfdfacbdcaababfebeecbbaefdfd.project.examly.io/customer/addDocuments';
  constructor(private http: HttpClient) { }
  uploadDocument(productImage: File, id: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('productImage', productImage);
    formData.append('id', id);

    const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
