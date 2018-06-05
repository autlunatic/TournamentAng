import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';
import { PairingSection, PairingInfo } from '../models/tournament.models';

@Component({
  selector: 'app-gameplan',
  templateUrl: './gameplan.component.html',
  styleUrls: ['./gameplan.component.css']
})
export class GameplanComponent implements OnInit {
  @Input() filterCompetitor = '';
  @Input() pairingSection: PairingSection;

  filteredPairings: PairingInfo[] = [];

  constructor() {}

  ngOnInit() {}
}
