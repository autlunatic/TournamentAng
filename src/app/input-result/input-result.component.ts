import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, Renderer } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { ResultInfo } from '../models/tournament.models';
import { ActivatedRoute, Router } from '@angular/router';

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
export class InputResultComponent implements OnInit, AfterViewInit {
  @Input() ResultID = 0;
  @ViewChild('competitor1Points') input1: ElementRef;
  errHTML = '';
  getResultInfosFailed = false;
  simpleInputFields: SimpleInputFields = {
    IDInfo: '',
    RoundInfo: '',
    Competitor1Name: '',
    Competitor2Name: '',
    Competitor1Points: 0,
    Competitor2Points: 0
  };
  result: ResultInfo;
  isReferee = false;
  refereePW = '';

  constructor(
    private tournamentService: TournamentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private renderer: Renderer
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
      .subscribe(response => this.router.navigate(['/results']), error => console.log('error', error));
  }
  onCancelInput() {
    this.router.navigate(['/results']);
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
