import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, Renderer, Renderer2 } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { ResultInfo } from '../models/tournament.models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

class SimpleInputFields {
  constructor(
    public IDInfo: string,
    public RoundInfo: string,
    public Competitor1Name: string,
    public Competitor2Name: string,
    public Competitor1Points: number,
    public Competitor2Points: number
  ) {}

  IDInfoToNumber(): number {
    const parsed = +this.IDInfo;
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }
}

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: ['./input-result.component.css']
})
export class InputResultComponent implements OnInit, AfterViewInit {
  @Input() ResultID = 0;
  @ViewChild('competitor1Points', { static: false }) input1: ElementRef;
  errHTML = '';
  getResultInfosFailed = false;
  simpleInputFields: SimpleInputFields = new SimpleInputFields('', '', '', '', 0, 0);
  result: ResultInfo;
  isReferee = false;
  refereePW = '';

  constructor(
    private tournamentService: TournamentService,
    private actRoute: ActivatedRoute,
    private renderer: Renderer,
    private location: Location
  ) {}

  ngOnInit() {
    this.tournamentService
      .getResultInfo(+this.actRoute.snapshot.params['ID'])
      .then((res: ResultInfo) => {
        if (res) {
          this.simpleInputFields.Competitor1Name = res.Comp1Name;
          this.simpleInputFields.Competitor1Points = res.Pairing1Pts;
          this.simpleInputFields.Competitor2Name = res.Comp2Name;
          this.simpleInputFields.Competitor2Points = res.Pairing2Pts;
          this.simpleInputFields.IDInfo = res.PairingID.toString();
          this.simpleInputFields.RoundInfo = res.PairingInfo;
        }
        this.result = res;
        this.getResultInfosFailed = false;
      })
      .catch(data => {
        this.getResultInfosFailed = true;
        console.log('promise failed');
      });
    this.tournamentService.isReferee().then(value => (this.isReferee = value));
  }
  onSaveInput() {
    this.result.Pairing1Pts = this.simpleInputFields.Competitor1Points;
    this.result.Pairing2Pts = this.simpleInputFields.Competitor2Points;

    this.tournamentService
      .saveResult(this.result)
      .subscribe(response => this.location.back(), error => console.log('error', error));
  }
  onCancelInput() {
    this.location.back();
  }
  ngAfterViewInit(): void {
    if (this.input1) {
      this.renderer.invokeElementMethod(this.input1.nativeElement, 'focus');
      setTimeout(() => {
        if (this.input1) {
          this.renderer.invokeElementMethod(this.input1.nativeElement, 'select');
        }
      }, 200);
    }
  }
  onSetRefereePW() {
    this.tournamentService.refereePassword = this.refereePW;
    this.tournamentService.isReferee().then(value => (this.isReferee = value));
  }
}
