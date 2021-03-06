import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameplanComponent } from './gameplan/gameplan.component';
import { ResultsComponent } from './results/results.component';
import { GroupsComponent } from './groups/groups.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingModule } from './routing/routing.module';
import { InputCompetitorsComponent } from './input-competitors/input-competitors.component';
import { TournamentService } from './services/tournament.service';
import { CompetitorPageComponent } from './competitor-page/competitor-page.component';
import { GroupComponent } from './groups/group.component';
import { GameplansComponent } from './gameplan/gameplans.component';
import { InputResultComponent } from './input-result/input-result.component';

import { SelectAllDirective } from './directives/select-all.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GameplanComponent,
    ResultsComponent,
    GroupsComponent,
    AdminPageComponent,
    MainPageComponent,
    InputCompetitorsComponent,
    CompetitorPageComponent,
    GroupComponent,
    GameplansComponent,
    InputResultComponent,
    SelectAllDirective
  ],
  imports: [BrowserModule, FormsModule, RoutingModule, HttpClientModule],
  providers: [BrowserModule, HttpClientModule, FormsModule, RoutingModule, TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
