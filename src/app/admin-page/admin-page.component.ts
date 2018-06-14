import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { TournamentService } from '../services/tournament.service';
import { TournamentDetails } from '../models/tournament.models';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  details: TournamentDetails;

  constructor(private tournamenService: TournamentService) {}

  ngOnInit() {
    this.tournamenService.getDetails().subscribe(data => (this.details = data));
  }

  onSave() {
    this.tournamenService.saveDetails().subscribe();
  }
  onCalcFinals() {
    this.tournamenService.calcFinals().subscribe();
  }

  onBuildTournament() {
    this.tournamenService.buildTournament().subscribe();
  }

  onDeleteFinalRound() {
    this.tournamenService.deleteFinalRound().subscribe();
  }
}
