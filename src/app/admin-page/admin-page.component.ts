import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { TournamentService } from '../services/tournament.service';


class details {
  "NumberOfParallelGames": number
  "MinutesPerGame": number
  "MinutesAvailForGroupsPhase": number
  "FinalistCount": number
  "TournamentStartTime": string
  "FinalsStartTime": string
}


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  details: details

  constructor(private tournamenService: TournamentService) { }

  ngOnInit() {
    this.details = this.tournamenService.tournament.Details
  }

  onSave() {
    this.tournamenService.saveDetails()
  }
  onCalcFinals() {
    this.tournamenService.calcFinals()
  }

  onBuildTournament() {
    this.tournamenService.buildTournament()
  }

  onDeleteFinalRound() {
    this.tournamenService.delteFinalRound()
  }

}
