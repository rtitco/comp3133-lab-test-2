import { Component, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.missionService.getMissions().subscribe(missions => this.missions = missions);
  }
}
