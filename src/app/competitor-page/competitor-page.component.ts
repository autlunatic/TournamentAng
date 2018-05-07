import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { pairingSection, GroupInfo, resultInfo } from '../models/tournament.models';
import { ActivatedRoute } from '@angular/router';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-competitor-page',
  templateUrl: './competitor-page.component.html',
  styleUrls: ['./competitor-page.component.css']
})

export class CompetitorPageComponent implements OnInit {
  group: GroupInfo
  section: pairingSection
  filterCompetitor: string = ""


  constructor(
    private tournamentService: TournamentService,
    private actRoute: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.actRoute.params.subscribe(param => {
      this.filterCompetitor = param['name']
      console.log(this.filterCompetitor)
      this.section = this.tournamentService.getPairingSectionForCompetitor(this.filterCompetitor)
      this.group = this.tournamentService.getGroupForCompetitor(this.filterCompetitor)
      }
    )
  }

}
