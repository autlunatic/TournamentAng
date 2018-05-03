import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { pairingSection } from '../models/tournament.models';

@Component({
  selector: 'app-gameplans',
  templateUrl: './gameplans.component.html',
  styleUrls: ['./gameplans.component.css']
})
export class GameplansComponent implements OnInit {
  
  pairingSections : pairingSection[] = []

  constructor(private tournamentService:TournamentService) { }

  ngOnInit() {
    this.pairingSections = this.tournamentService.getPairingSections()
  }

}
