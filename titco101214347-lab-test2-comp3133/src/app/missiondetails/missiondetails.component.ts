import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MissionService } from '../mission.service';
import { Mission } from '../mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMission();
  }

  getMission(): void {
    const flight_number = this.route.snapshot.paramMap.get('flightNum');
    this.missionService.getMission(flight_number)
      .subscribe(mission => this.mission = mission);
  }

  goBack(): void {
    this.location.back();
  }

  @Input() mission?: Mission;
}
