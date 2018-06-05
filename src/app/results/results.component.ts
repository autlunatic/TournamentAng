import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { ResultInfo, ResultInfos } from '../models/tournament.models';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() filterCompetitor = '';
  results: ResultInfo[] = [];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    console.log(this.filterCompetitor);
    this.tournamentService.getResultInfos(this.filterCompetitor).subscribe((data: ResultInfos) => {
      this.results = data.ResultInfos;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.results = this.tournamentService.getResultInfos(this.filterCompetitor);
  }
}
