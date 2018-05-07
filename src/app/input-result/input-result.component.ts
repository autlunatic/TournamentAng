import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { resultInfo } from '../models/tournament.models';
import { ActivatedRoute } from '@angular/router';

class simpleInputFields {
  IDInfo: string
  RoundInfo: string
  Competitor1Name: string
  Competitor2Name: string
  Competitor1Points: number
  Competitor2Points: number
}

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: ['./input-result.component.css']
})
export class InputResultComponent implements OnInit {
  errHTML: string = ""
  simpleInputFields: simpleInputFields = {
    IDInfo: "",
    RoundInfo: "",
    Competitor1Name: "",
    Competitor2Name: "",
    Competitor1Points: 0,
    Competitor2Points: 0
  }
  @Input() ResultID: number = 0
  result: resultInfo

  constructor(private tournamentService: TournamentService,
  private actRoute:ActivatedRoute) { }

  ngOnInit() {
    let res = this.tournamentService.getResultInfo(this.actRoute.snapshot.params['ID'])
    console.log(res)
    if (res) {
      this.simpleInputFields.Competitor1Name = res.Comp1Name
      this.simpleInputFields.Competitor1Points = res.Pairing1Pts
      this.simpleInputFields.Competitor2Name = res.Comp2Name
      this.simpleInputFields.Competitor2Points = res.Pairing2Pts
      this.simpleInputFields.IDInfo = res.PairingID.toString()
      this.simpleInputFields.RoundInfo = res.PairingInfo
    }
  }
  onSaveInput(){
    this.tournamentService.saveResult(this.result)
  }

}
