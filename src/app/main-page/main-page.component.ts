import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  hours: string;
  mins: string;
  secs: string;
  private refreshClock = interval(1000);
  constructor() {}
  onrefreshClock() {
    const h = new Date().getHours();
    this.hours = (h < 10 ? '0' : '') + String(h);
    const m = new Date().getMinutes();
    this.mins = (m < 10 ? '0' : '') + m;
    const s = new Date().getSeconds();
    this.secs = (s < 10 ? '0' : '') + s;
  }

  ngOnInit() {
    this.onrefreshClock();
    this.refreshClock.subscribe(() => this.onrefreshClock());
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
}
