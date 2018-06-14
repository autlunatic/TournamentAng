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
  competitors: string[];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.tournamentService.getCompetitors().subscribe(data => {
      this.competitors = [];
      data.forEach(element => {
        this.competitors.push(element.Name);
      });
      console.log(data);
    });
  }

  onAddTeam() {
    const upperNames = this.competitors.map(function(value) {
      return value.toUpperCase().trim();
    });

    if (this.inputName === '') {
      this.ErrHTML = 'Teamname darf nicht leer sein!';
      return;
    }
    if (upperNames.includes(this.inputName.toUpperCase().trim())) {
      this.ErrHTML = 'Teamname ist bereits vergeben';
      return;
    }

    this.competitors.push(this.inputName);
    this.ErrHTML = '';
    // this.tournamentService.addCompetitor(this.inputName);

    this.inputName = '';
    this.inputBox.nativeElement.focus();
  }
  onSaveCompetitors() {
    this.tournamentService
      .saveNewCompetitors(this.competitors)
      .subscribe(response => console.log('save OK'), error => console.log('error', error));
  }
  onRemoveCompetitor(competitor: string) {
    this.competitors = this.competitors.filter(compName => compName !== competitor);
  }
}
