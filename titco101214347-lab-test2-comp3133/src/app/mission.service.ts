import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//import Interface and Data
import { Mission } from './mission';
import { MISSIONS } from './mission-data';

@Injectable({
  providedIn: 'root'
})

export class MissionService {

  constructor() { }

  getMissions(): Observable<Mission[]> {
    const missions = of(MISSIONS);
    return missions;
  }

  getMission(name: any): Observable<Mission> {
    const mission = MISSIONS.find(m => m.mission_name === name) as Mission;
    return of(mission);
  }
}
