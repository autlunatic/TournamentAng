import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges, DoCheck {
  isAdmin: boolean;
  lastServiceAdminPassword: string;
  constructor(private service: TournamentService) {}

  ngOnInit() {
    this.service.isAdmin().then(value => (this.isAdmin = value));
  }
  ngOnChanges() {
    console.log('onchange');
    this.service.isAdmin().then(value => (this.isAdmin = value));
  }
  ngDoCheck() {
    if (this.service.adminPassword === this.lastServiceAdminPassword) {
      return;
    }
    this.lastServiceAdminPassword = this.service.adminPassword;

    this.service.isAdmin().then(value => (this.isAdmin = value));
    console.log('check');
  }
}
