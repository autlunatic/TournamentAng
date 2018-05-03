import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { resultInfo } from '../models/tournament.models';





@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() filterCompetitor: string = "" 
  results : resultInfo[] = []
  
  constructor(private tournamentService:TournamentService) { }

  ngOnInit() {
    this.results = this.tournamentService.getResultInfos(this.filterCompetitor)
  }

}
