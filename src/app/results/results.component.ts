import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { resultInfo } from '../models/tournament.models';





@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.results = this.tournamentService.getResultInfos(this.filterCompetitor)
  }
  @Input() filterCompetitor: string = "" 
  results : resultInfo[] = []
  
  constructor(private tournamentService:TournamentService) { }

  ngOnInit() {
    console.log(this.filterCompetitor)
    this.results = this.tournamentService.getResultInfos(this.filterCompetitor)
  }

}
