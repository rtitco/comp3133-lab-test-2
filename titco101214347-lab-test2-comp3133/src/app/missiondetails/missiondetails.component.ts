import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mission?: Mission;
}
