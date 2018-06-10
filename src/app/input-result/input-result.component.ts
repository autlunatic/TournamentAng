import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { ResultInfo } from '../models/tournament.models';
import { ActivatedRoute } from '@angular/router';

class SimpleInputFields {
  IDInfo: string;
  RoundInfo: string;
  Competitor1Name: string;
  Competitor2Name: string;
  Competitor1Points: number;
  Competitor2Points: number;
}

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: ['./input-result.component.css']
})
export class InputResultComponent implements OnInit {
  errHTML = '';
  simpleInputFields: SimpleInputFields = {
    IDInfo: '',
    RoundInfo: '',
    Competitor1Name: '',
    Competitor2Name: '',
    Competitor1Points: 0,
    Competitor2Points: 0
  };
  @Input() ResultID = 0;
  result: ResultInfo;

  constructor(private tournamentService: TournamentService, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.tournamentService.getResultInfo(+this.actRoute.snapshot.params['ID']).subscribe((res: ResultInfo) => {
      console.log(res);
      if (res) {
        this.simpleInputFields.Competitor1Name = res.Comp1Name;
        this.simpleInputFields.Competitor1Points = res.Pairing1Pts;
        this.simpleInputFields.Competitor2Name = res.Comp2Name;
        this.simpleInputFields.Competitor2Points = res.Pairing2Pts;
        this.simpleInputFields.IDInfo = res.PairingID.toString();
        this.simpleInputFields.RoundInfo = res.PairingInfo;
      }
      this.result = res;
    });
  }
  onSaveInput() {
    this.result.Pairing1Pts = this.simpleInputFields.Competitor1Points;
    this.result.Pairing2Pts = this.simpleInputFields.Competitor2Points;

    console.log(this.result);
    this.tournamentService
      .saveResult(this.result)
      .subscribe(response => console.log(response), error => console.log(error));
  }
}
