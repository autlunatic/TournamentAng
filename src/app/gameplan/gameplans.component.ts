import { Component, OnInit, OnDestroy } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { PairingSection } from '../models/tournament.models';
import { Subscription } from 'rxjs';

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
      this.pairingSections = sections;
    });
  }
  ngOnDestroy() {
    this.sectSub.unsubscribe();
  }
}
