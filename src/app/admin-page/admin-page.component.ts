import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { TournamentService } from '../services/tournament.service';
import { TournamentDetails } from '../models/tournament.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  details: TournamentDetails;
  isAdmin: boolean;
  adminPW: string;
  private startHour: number;
  private finStartHour: number;
  private startMin: number;
  private finStartMin: number;
  private tournamentStartTime;

  constructor(private tournamenService: TournamentService, private router: Router) {}

  ngOnInit() {
    this.refreshDetails();
    this.tournamenService.isAdmin().then(value => (this.isAdmin = value));
  }

  refreshDetails() {
    this.tournamenService.getDetails().subscribe(data => {
      console.log('refresh', data);
      data.FinalsStartTime = new Date(data.FinalsStartTime);
      data.TournamentStartTime = new Date(data.TournamentStartTime);
      this.details = data;
      console.log('asdf', this.tournamentStartTime);
      console.log(data.FinalsStartTime);
      this.finStartHour = this.details.FinalsStartTime.getHours();
      this.finStartMin = this.details.FinalsStartTime.getMinutes();
      this.startHour = this.details.TournamentStartTime.getHours();
      this.startMin = this.details.TournamentStartTime.getMinutes();
    });
  }
  onSave() {
    console.log(this.tournamentStartTime);

    this.details.TournamentStartTime.setHours(+this.startHour);
    this.details.TournamentStartTime.setMinutes(+this.startMin);

    this.details.FinalsStartTime.setHours(+this.finStartHour);
    this.details.FinalsStartTime.setMinutes(+this.finStartMin);

    console.log(this.details);
    this.tournamenService.saveDetails(this.details).subscribe(data => this.refreshDetails());
  }
  onCalcFinals() {
    this.tournamenService.calcFinals().subscribe();
  }
  onLoadFromDB() {
    this.tournamenService.loadFromDB().subscribe();
    this.refreshDetails();
  }
  onSaveToDB() {
    this.tournamenService.saveToDB().subscribe();
  }

  onBuildTournament() {
    this.tournamenService.buildTournament().subscribe();
  }

  onDeleteFinalRound() {
    this.tournamenService.deleteFinalRound().subscribe();
  }
  onCalcRandomDraw() {
    this.tournamenService.calcRandomDraw().subscribe();
    this.router.navigate(['/inputCompetitors']);
  }
  onSetAdminPW() {
    this.tournamenService.adminPassword = this.adminPW;
    this.tournamenService.isAdmin().then(value => (this.isAdmin = value));
  }
}
