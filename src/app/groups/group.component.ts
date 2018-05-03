import { Component, OnInit, Input } from '@angular/core';
import { GroupInfo } from '../models/tournament.models';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() grp:GroupInfo
  
  constructor() { }

  ngOnInit() {
  }

}
