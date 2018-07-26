import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PairingSection } from '../models/tournament.models';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  pairingSections: PairingSection[] = [];
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
    if (this.secs === '01') {
      this.refreshPairings();
    }
  }

  refreshPairings() {
    this.tournamentService.getActualPairingSections().subscribe((sections: PairingSection[]) => {
      this.pairingSections = sections;
      this.displayPairings = this.pairingSections.length === 2 && this.pairingSections[0].Pairings != null;

      console.log(this.pairingSections);
    });
  }
  ngOnInit() {
    this.onrefreshClock();
    this.sub = this.refreshClock.subscribe(() => this.onrefreshClock());
    this.refreshPairings();
    // setInterval(this.refreshClock, 1000);
    // setInterval(function() {
    //   const h = new Date().getHours();
    //   console.log(h);
    //   console.log(h < 10 ? '0' : '');
    //   this.hours = (h < 10 ? '0' : '') + String(h);
    // }, 1000);
    // setInterval(function() {
    //   const m = new Date().getMinutes();
    //   this.mins = (m < 10 ? '0' : '') + m;
    // }, 1000);
    // setInterval(function() {
    //   const s = new Date().getSeconds();
    //   console.log(s);
    //   this.secs = String(s);
    //   console.log(s < 10 ? '0' : '');
    //   // this.secs = (s < 10 ? '0' : '') + s;
    // }, 1000);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
