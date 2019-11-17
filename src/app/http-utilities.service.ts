import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './models/person';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { API_Response } from './models/api_response';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilitiesService {
  baseUrl: string = 'http://13.78.132.170:5000/find';

  constructor(private httpClient: HttpClient) {}

  public search(file: any){
    const formData: FormData = new FormData();
    formData.append('fileKey', file, file.name);
    // const headers = new HttpHeaders({'Accept':'text/html; charset=utf-8'});, {headers: headers, responseType: 'text'}
    return this.httpClient
      .post<API_Response>(this.baseUrl, formData).pipe(
        map((data:API_Response)=>{
          return data;
        }), catchError(error=>{
          return null;
        })
      );
  }
}



