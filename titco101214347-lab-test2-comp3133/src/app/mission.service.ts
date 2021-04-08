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
}
