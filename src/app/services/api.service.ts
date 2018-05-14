import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()

export class ApiService {

  constructor(private http: HttpClient) { }

  public invokeService(url, section, data, callback) {
    return this.http.get(API_URL + section)
      .subscribe(response => {
        const result = response;

      });
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was : ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(
    'Something bad happened; please try again later.');
  }

}
