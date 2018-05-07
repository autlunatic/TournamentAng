import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';
import { TournamentService } from '../services/tournament.service';
import { pairingSection, pairingInfo } from '../models/tournament.models';

@Component({
  selector: 'app-gameplan',
  templateUrl: './gameplan.component.html',
  styleUrls: ['./gameplan.component.css']
})

export class GameplanComponent implements OnInit {
  @Input() filterCompetitor: string = ''
  @Input() pairingSection: pairingSection 

  filteredPairings: pairingInfo[] =[]

  constructor(private tService: TournamentService) { }

  ngOnInit() {
  }
}