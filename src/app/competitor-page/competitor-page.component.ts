import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { pairingSection, GroupInfo, resultInfo } from '../models/tournament.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competitor-page',
  templateUrl: './competitor-page.component.html',
  styleUrls: ['./competitor-page.component.css']
})
export class CompetitorPageComponent implements OnInit {
  group : GroupInfo
  section : pairingSection
  filterCompetitor: string = ""
  filteredResults : resultInfo[]

  constructor(
     private tournamentService: TournamentService ,
     private actRoute: ActivatedRoute
    ){}


  ngOnInit() {
    this.filterCompetitor = this.actRoute.snapshot.params['name']
    this.filteredResults = this.tournamentService.getResultInfos(this.filterCompetitor)
    console.log("routesnap" , this.actRoute.snapshot.params)
    console.log(name)
    this.section = this.tournamentService.getPairingSectionForCompetitor(this.filterCompetitor)
    this.group = this.tournamentService.getGroupForCompetitor(this.filterCompetitor)
  }

}
