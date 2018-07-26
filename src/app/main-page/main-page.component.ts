import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PairingSection, ResultInfos } from '../models/tournament.models';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  resInfos: ResultInfos[];
  displayPairings = false;
  hours: string;
  mins: string;
  secs: string;
  sub: Subscription;
  private refreshClock = interval(1000);
  constructor(private tournamentService: TournamentService) {}
  onrefreshClock() {
    const h = new Date().getHours();
    this.hours = (h < 10 ? '0' : '') + String(h);
    const m = new Date().getMinutes();
    this.mins = (m < 10 ? '0' : '') + m;
    const s = new Date().getSeconds();
    this.secs = (s < 10 ? '0' : '') + s;
    if (this.secs.length === 2 && (this.secs.charAt(1) === '0' || this.secs.charAt(1) === '5')) {
      this.refreshPairings();
    }
  }

  refreshPairings() {
    this.tournamentService.getActualResults().subscribe((resInfos: ResultInfos[]) => {
      this.resInfos = resInfos;
      this.displayPairings = this.resInfos.length >= 1 && this.resInfos[0].ResultInfos.length >= 1;
    });
  }
  ngOnInit() {
    this.onrefreshClock();
    this.sub = this.refreshClock.subscribe(() => this.onrefreshClock());
    this.refreshPairings();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
