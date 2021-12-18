import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:5000/api/v1/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  //   createEmployee(data): Observable<any> {
  //     let url = `${this.baseUri}/create`;
  //     return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  //   }

  get(url: string) {
    return this.http.get(`${this.baseUri}${url}`);
  }

  post(url: string, dataObj: any) {
    return this.http
      .post(`${this.baseUri}${url}`, dataObj)
      .pipe(catchError(this.errorMgmt));
  }

  //   getEmployee(id): Observable<any> {
  //     let url = `${this.baseUri}/read/${id}`;
  //     return this.http.get(url, { headers: this.headers }).pipe(
  //       map((res: Response) => {
  //         return res || {};
  //       }),
  //       catchError(this.errorMgmt)
  //     );
  //   }

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
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
