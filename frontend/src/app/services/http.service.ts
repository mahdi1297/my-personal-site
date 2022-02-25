import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = `${environment.api_url}`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(`${this.baseUri}${url}`);
  }

  post(url: string, dataObj: any) {
    return this.http
      .post(`${this.baseUri}${url}`, dataObj)
      .pipe(catchError(this.errorMgmt));
  }

  getThis(url: any, dataObj: any): Observable<any> {
    return this.http.post(`${this.baseUri}${url}`, dataObj).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  //   updateEmployee(id, data): Observable<any> {
  //     let url = `${this.baseUri}/update/${id}`;
  //     return this.http
  //       .put(url, data, { headers: this.headers })
  //       .pipe(catchError(this.errorMgmt));
  //   }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    if (error.status === 404) {
      alert(error.error.message);
    }

    return throwError(error.error);
  }
}
