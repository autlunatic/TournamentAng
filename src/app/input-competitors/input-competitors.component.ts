import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { Competitor } from '../models/tournament.models';

@Component({
  selector: 'app-input-competitors',
  templateUrl: './input-competitors.component.html',
  styleUrls: ['./input-competitors.component.css']
})
export class InputCompetitorsComponent implements OnInit {
  ErrHTML = '';

  @ViewChild('competitorName') inputBox: ElementRef;
  inputName = '';
  competitors: Competitor[];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.tournamentService.getCompetitors().subscribe(data => {
      this.competitors = data;
    });
  }

  onAddTeam() {
    const upperNames = this.competitors.map(function(value) {
      return value.name.toUpperCase().trim();
    });
    if (upperNames.includes(this.inputName.toUpperCase().trim())) {
      this.ErrHTML = 'Teamname ist bereits vergeben';
      return;
    }

    this.ErrHTML = '';
    this.tournamentService.addCompetitor(this.inputName);

    this.inputName = '';
    this.inputBox.nativeElement.focus();
  }
}
