import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';

//import Interface and Data
import { Mission } from './mission';
import { MISSIONS } from './mission-data';
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

  // getMissions(): Observable<Mission[]> {
  //   const missions = of(MISSIONS);
  //   return missions;
  // }

  getMission(name: any): Observable<Mission> {
    const url = `${this.REST_API_SERVER}/${name}`;
    // const mission = MISSIONS.find(m => m.mission_name === name) as Mission;
    // return of(mission);
    return this.httpClient.get<Mission>(url).pipe(
      tap(_ => console.log(`found mission: ${name}`)),
      catchError(this.handleError)
    )
  }
}
