import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';

//import Interface and Data
import { Mission } from './mission';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class MissionService {

  private REST_API_SERVER = "https://api.spacexdata.com/v3/launches";

  constructor(private httpClient: HttpClient) { }

  public getMissions() {
    return this.httpClient.get<Mission[]>(this.REST_API_SERVER)
      .pipe(retry(3), catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getMission(flightNum: any): Observable<Mission> {
    const url = `${this.REST_API_SERVER}/${flightNum}`;
    return this.httpClient.get<Mission>(url).pipe(
      tap(_ => console.log(`found mission: ${flightNum}`)),
      catchError(this.handleError)
    )
  }
}
