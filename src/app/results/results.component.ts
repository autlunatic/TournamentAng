import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { ResultInfo, ResultInfos } from '../models/tournament.models';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() resultInfos: ResultInfos[] = [];
  @Input() isForCompetitor: boolean;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    if (!this.isForCompetitor && (!this.resultInfos || this.resultInfos.length === 0)) {
      this.tournamentService.getResultInfos('').subscribe((data: ResultInfos[]) => {
        this.resultInfos = data;
      });
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.results = this.tournamentService.getResultInfos(this.filterCompetitor);
  }
}
