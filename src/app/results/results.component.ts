import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { ResultInfo, ResultInfos } from '../models/tournament.models';
import { format } from 'util';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() resultInfos: ResultInfos[] = [];
  @Input() isForCompetitor: boolean;
  @Input() isForMainPage: boolean;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    console.log('init results', this.resultInfos);
    // console.log('init results', this.resultInfos[0].ResultInfos);
    if (!this.isForCompetitor && (!this.resultInfos || this.resultInfos.length === 0)) {
      this.tournamentService.getResultInfos('').subscribe((data: ResultInfos[]) => {
        this.resultInfos = data;
        console.log('forcompresults', data);
      });
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.results = this.tournamentService.getResultInfos(this.filterCompetitor);
  }
  getPoints(result) {
    const str = [];
    if (!this.isForMainPage) {
      str.push(result.Group1Pts.toString());
      str.push(':');
      str.push(result.Group2Pts.toString());
      str.push(' (');
    }
    str.push(result.Pairing1Pts.toString());
    str.push(':');
    str.push(result.Pairing2Pts.toString());
    if (!this.isForMainPage) {
      str.push(')');
    }
    return str.join('');
  }
}
