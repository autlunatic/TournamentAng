import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { GroupInfo } from '../models/tournament.models';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: GroupInfo[];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.tournamentService.getGroups().subscribe(data => (this.groups = data));
  }
}
