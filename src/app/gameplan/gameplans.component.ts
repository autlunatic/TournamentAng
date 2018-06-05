import { Component, OnInit, OnDestroy } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { PairingSection } from '../models/tournament.models';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-gameplans',
  templateUrl: './gameplans.component.html',
  styleUrls: ['./gameplans.component.css']
})
export class GameplansComponent implements OnInit, OnDestroy {
  pairingSections: PairingSection[] = [];
  sectSub: Subscription;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.sectSub = this.tournamentService.getPairingSections().subscribe((sections: PairingSection[]) => {
      console.log(sections);
      this.pairingSections = sections;
      console.log(this.pairingSections);
    });
  }
  ngOnDestroy() {
    this.sectSub.unsubscribe();
  }
}
