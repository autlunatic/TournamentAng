import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { Competitor } from '../models/tournament.models';

class CompetitorInfo {
  Name: string;
  DrawNumber: string;
}

@Component({
  selector: 'app-input-competitors',
  templateUrl: './input-competitors.component.html',
  styleUrls: ['./input-competitors.component.css']
})
export class InputCompetitorsComponent implements OnInit {
  ErrHTML = '';

  @ViewChild('competitorName') inputBox: ElementRef;
  inputName = '';
  competitors: CompetitorInfo[];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.refreshCompetitors();
  }

  refreshCompetitors() {
    this.tournamentService.getCompetitors().subscribe(data => {
      this.competitors = [];
      data.forEach(element => {
        const info = { Name: element.Name, DrawNumber: element.DrawNumber };
        this.competitors.push(info);
      });
      this.competitors.sort((a, b) => parseInt(a.DrawNumber, 10) - parseInt(b.DrawNumber, 10));
    });
  }

  onAddTeam() {
    const upperNames = this.competitors.map(function(value) {
      return value.Name.toUpperCase().trim();
    });

    if (this.inputName === '') {
      this.ErrHTML = 'Teamname darf nicht leer sein!';
      return;
    }
    if (upperNames.includes(this.inputName.toUpperCase().trim())) {
      this.ErrHTML = 'Teamname ist bereits vergeben';
      return;
    }

    this.competitors.push({ Name: this.inputName, DrawNumber: '0' });
    this.ErrHTML = '';
    // this.tournamentService.addCompetitor(this.inputName);

    this.inputName = '';
    this.inputBox.nativeElement.focus();
  }
  onSaveCompetitors() {
    this.tournamentService
      .saveNewCompetitors(this.competitors.map(comp => comp.Name))
      .subscribe(response => console.log('save OK'), error => console.log('error', error));
  }
  onRemoveCompetitor(competitor: string) {
    this.competitors = this.competitors.filter(comp => comp.Name !== competitor);
  }
  onSetDraw(comp: Competitor) {
    this.tournamentService.saveNewDrawNumber(comp).subscribe(
      response => {
        console.log('save OK');
        this.refreshCompetitors();
      },
      error => console.log('error', error)
    );
  }
}
