import { Component, OnInit, ChangeDetectorRef, ViewChild, OnChanges } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { PairingSection, GroupInfo, ResultInfo, ResultInfos } from '../models/tournament.models';
import { ActivatedRoute } from '@angular/router';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-competitor-page',
  templateUrl: './competitor-page.component.html',
  styleUrls: ['./competitor-page.component.css']
})
export class CompetitorPageComponent implements OnInit {
  group: GroupInfo;
  section: PairingSection;
  filterCompetitor = '';
  resultInfos: ResultInfos[];

  constructor(private tournamentService: TournamentService, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.actRoute.params.subscribe(param => {
      this.filterCompetitor = param['name'];

      // let section: PairingSection;
      this.tournamentService.getPairingSections().subscribe(data => {
        // this.section =
        this.section = { Description: 'Spielplan', Pairings: [] };
        data.forEach(element => {
          console.log(element);
          if (element.Pairings) {
            element.Pairings.forEach(pairing => {
              if (pairing.Comp1Name === this.filterCompetitor || pairing.Comp2Name === this.filterCompetitor) {
                this.section.Pairings.push(pairing);
              }
            });
          }
        });
      });

      this.tournamentService.getGroups().subscribe(data => {
        data.forEach(element => {
          element.CInfo.forEach(cInfo => {
            if (cInfo.Name === this.filterCompetitor) {
              this.group = element;
            }
          });
        });
      });

      this.tournamentService.getResultInfos(this.filterCompetitor).subscribe((data: ResultInfos[]) => {
        this.resultInfos = data;
      });
    });
  }
}
