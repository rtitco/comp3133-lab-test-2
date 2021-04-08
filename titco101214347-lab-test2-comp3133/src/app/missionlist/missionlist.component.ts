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
  selectedMission?: Mission;

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.getMissions();
  }

  onSelect(mission: Mission): void {
    this.selectedMission = mission;
  }

  getMissions(): void {
    this.missionService.getMissions().subscribe(missions => this.missions = missions);
  }
}
