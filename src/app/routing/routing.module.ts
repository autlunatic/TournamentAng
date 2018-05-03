import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page.component';
import { GameplanComponent } from '../gameplan/gameplan.component';
import { GroupsComponent } from '../groups/groups.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { ResultsComponent } from '../results/results.component';
import { InputCompetitorsComponent } from '../input-competitors/input-competitors.component';
import { CompetitorPageComponent } from '../competitor-page/competitor-page.component';
import { GameplansComponent } from '../gameplan/gameplans.component';



const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "gameplan", component: GameplansComponent },
  { path: "results", component: ResultsComponent },
  { path: "groups", component: GroupsComponent },
  { path: "inputCompetitors", component: InputCompetitorsComponent },
  { path: "adminPage", component: AdminPageComponent },
  { path: "competitor/:name", component: CompetitorPageComponent },
  { path: "**", component: MainPageComponent },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
