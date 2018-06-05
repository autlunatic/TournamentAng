import { Injectable } from '@angular/core';
import {
  PairingInfo,
  PairingSection,
  GroupInfo,
  Competitor,
  ResultInfo,
  ResultInfos
} from '../models/tournament.models';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TournamentService {
  resultInfos: ResultInfo[] = [
    {
      PairingID: 0,
      PairingInfo: '0',
      Comp1Name: 'Hans',
      Comp2Name: 'Wurst',
      Pairing1Pts: 0,
      Pairing2Pts: 1,
      Group1Pts: 1,
      Group2Pts: 2,
      Done: true
    },
    {
      PairingID: 1,
      PairingInfo: '1',
      Comp1Name: 'Benni',
      Comp2Name: 'Dani',
      Pairing1Pts: 0,
      Pairing2Pts: 1,
      Group1Pts: 1,
      Group2Pts: 2,
      Done: true
    },
    {
      PairingID: 2,
      PairingInfo: '2',
      Comp1Name: 'Hans',
      Comp2Name: 'Benni',
      Pairing1Pts: 0,
      Pairing2Pts: 1,
      Group1Pts: 1,
      Group2Pts: 2,
      Done: true
    }
  ];

  competitors: Competitor[] = [{ ID: 1, name: 'benni' }, { ID: 2, name: 'dani' }, { ID: 3, name: 'Zoé' }];

  demopairings: PairingInfo[] = [
    {
      FormattedTime: '12:00',
      Court: 'Platz 1',
      RoundInfo: 'Runde 1',
      Comp1Name: 'HansdieKrasse Wurst',
      Comp2Name: 'wurstistKralleralsHAnsalleszusammen'
    },
    {
      FormattedTime: '12:00',
      Court: 'Platz 1',
      RoundInfo: 'Runde 2',
      Comp1Name: 'Hans',
      Comp2Name: 'Benni'
    },
    {
      FormattedTime: '12:00',
      Court: 'Platz 1',
      RoundInfo: 'Runde 3',
      Comp1Name: 'Dani',
      Comp2Name: 'Hans'
    },
    {
      FormattedTime: '12:00',
      Court: 'Platz 4',
      RoundInfo: 'Runde 1',
      Comp1Name: 'Dani',
      Comp2Name: 'Benni'
    }
  ];

  pairingSection: PairingSection = {
    Description: 'Spielplan',
    Pairings: this.demopairings
  };

  pairingSectionFinals: PairingSection = {
    Description: 'Finalrunden',
    Pairings: this.demopairings
  };

  tournament = {
    ID: 0,
    Details: {
      NumberOfParallelGames: 4,
      MinutesPerGame: 15,
      MinutesAvailForGroupsPhase: 90,
      FinalistCount: 8,
      TournamentStartTime: '2018-04-26T20:34:44.330092562+02:00',
      FinalsStartTime: '0001-01-01T00:00:00Z'
    },
    Competitors: [
      {
        Id: 0,
        TeamName: 'Benni',
        GroupPoints: 1,
        points: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 1,
        TeamName: 'Dani',
        GroupPoints: 2,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 2,
        TeamName: 'Mona',
        GroupPoints: 3,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 3,
        TeamName: 'Andrea',
        GroupPoints: 4,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 4,
        TeamName: 'Zoé',
        GroupPoints: 5,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 5,
        TeamName: 'Andreas',
        GroupPoints: 6,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 6,
        TeamName: 'Bernhard',
        GroupPoints: 7,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 7,
        TeamName: 'Florian',
        GroupPoints: 8,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      },
      {
        Id: 8,
        TeamName: 'Simon',
        GroupPoints: 9,
        GamePoints: 0,
        DrawNr: 0,
        GroupPlace: 0
      }
    ],
    Groups: [
      {
        Competitors: [
          {
            Id: 0,
            TeamName: 'Benni',
            GroupPoints: 1,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          },
          {
            Id: 1,
            TeamName: 'Dani',
            GroupPoints: 2,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          },
          {
            Id: 2,
            TeamName: 'Mona',
            GroupPoints: 3,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          },
          {
            Id: 3,
            TeamName: 'Andrea',
            GroupPoints: 4,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          },
          {
            Id: 4,
            TeamName: 'Zoé',
            GroupPoints: 5,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          }
        ]
      },
      {
        Competitors: [
          {
            Id: 5,
            TeamName: 'Andreas',
            GroupPoints: 6,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          },
          {
            Id: 6,
            TeamName: 'Bernhard',
            GroupPoints: 7,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          },
          {
            Id: 7,
            TeamName: 'Florian',
            GroupPoints: 8,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          },
          {
            Id: 8,
            TeamName: 'Simon',
            GroupPoints: 9,
            GamePoints: 0,
            DrawNr: 0,
            GroupPlace: 0
          }
        ]
      }
    ],
    Pairings: [
      {
        Competitor1ID: 3,
        Competitor2ID: 4,
        Round: 1,
        ID: 0,
        GroupID: 1,
        StartTime: '2018-04-26T20:34:44.330092562+02:00'
      },
      {
        Competitor1ID: 0,
        Competitor2ID: 1,
        Round: 1,
        ID: 1,
        GroupID: 1,
        StartTime: '2018-04-26T20:34:44.330092562+02:00'
      },
      {
        Competitor1ID: 5,
        Competitor2ID: 6,
        Round: 1,
        ID: 2,
        GroupID: 2,
        StartTime: '2018-04-26T20:34:44.330092562+02:00'
      },
      {
        Competitor1ID: 7,
        Competitor2ID: 8,
        Round: 1,
        ID: 3,
        GroupID: 2,
        StartTime: '2018-04-26T20:34:44.330092562+02:00'
      },
      {
        Competitor1ID: 3,
        Competitor2ID: 1,
        Round: 2,
        ID: 4,
        GroupID: 1,
        StartTime: '2018-04-26T20:49:44.330092562+02:00'
      },
      {
        Competitor1ID: 0,
        Competitor2ID: 2,
        Round: 2,
        ID: 5,
        GroupID: 1,
        StartTime: '2018-04-26T20:49:44.330092562+02:00'
      },
      {
        Competitor1ID: 8,
        Competitor2ID: 6,
        Round: 2,
        ID: 6,
        GroupID: 2,
        StartTime: '2018-04-26T20:49:44.330092562+02:00'
      },
      {
        Competitor1ID: 5,
        Competitor2ID: 7,
        Round: 2,
        ID: 7,
        GroupID: 2,
        StartTime: '2018-04-26T20:49:44.330092562+02:00'
      },
      {
        Competitor1ID: 0,
        Competitor2ID: 3,
        Round: 3,
        ID: 8,
        GroupID: 1,
        StartTime: '2018-04-26T21:04:44.330092562+02:00'
      },
      {
        Competitor1ID: 4,
        Competitor2ID: 2,
        Round: 3,
        ID: 9,
        GroupID: 1,
        StartTime: '2018-04-26T21:04:44.330092562+02:00'
      },
      {
        Competitor1ID: 6,
        Competitor2ID: 7,
        Round: 3,
        ID: 10,
        GroupID: 2,
        StartTime: '2018-04-26T21:04:44.330092562+02:00'
      },
      {
        Competitor1ID: 5,
        Competitor2ID: 8,
        Round: 3,
        ID: 11,
        GroupID: 2,
        StartTime: '2018-04-26T21:04:44.330092562+02:00'
      },
      {
        Competitor1ID: 1,
        Competitor2ID: 2,
        Round: 4,
        ID: 12,
        GroupID: 1,
        StartTime: '2018-04-26T21:19:44.330092562+02:00'
      },
      {
        Competitor1ID: 0,
        Competitor2ID: 4,
        Round: 4,
        ID: 13,
        GroupID: 1,
        StartTime: '2018-04-26T21:19:44.330092562+02:00'
      },
      {
        Competitor1ID: 2,
        Competitor2ID: 3,
        Round: 5,
        ID: 14,
        GroupID: 1,
        StartTime: '2018-04-26T21:34:44.330092562+02:00'
      },
      {
        Competitor1ID: 1,
        Competitor2ID: 4,
        Round: 5,
        ID: 15,
        GroupID: 1,
        StartTime: '2018-04-26T21:34:44.330092562+02:00'
      }
    ],
    PairingResults: {},
    Plan: [
      [
        {
          Competitor1ID: 3,
          Competitor2ID: 4,
          Round: 1,
          ID: 0,
          GroupID: 1,
          StartTime: '2018-04-26T20:34:44.330092562+02:00'
        },
        {
          Competitor1ID: 0,
          Competitor2ID: 1,
          Round: 1,
          ID: 1,
          GroupID: 1,
          StartTime: '2018-04-26T20:34:44.330092562+02:00'
        },
        {
          Competitor1ID: 5,
          Competitor2ID: 6,
          Round: 1,
          ID: 2,
          GroupID: 2,
          StartTime: '2018-04-26T20:34:44.330092562+02:00'
        },
        {
          Competitor1ID: 7,
          Competitor2ID: 8,
          Round: 1,
          ID: 3,
          GroupID: 2,
          StartTime: '2018-04-26T20:34:44.330092562+02:00'
        }
      ],
      [
        {
          Competitor1ID: 3,
          Competitor2ID: 1,
          Round: 2,
          ID: 4,
          GroupID: 1,
          StartTime: '2018-04-26T20:49:44.330092562+02:00'
        },
        {
          Competitor1ID: 0,
          Competitor2ID: 2,
          Round: 2,
          ID: 5,
          GroupID: 1,
          StartTime: '2018-04-26T20:49:44.330092562+02:00'
        },
        {
          Competitor1ID: 8,
          Competitor2ID: 6,
          Round: 2,
          ID: 6,
          GroupID: 2,
          StartTime: '2018-04-26T20:49:44.330092562+02:00'
        },
        {
          Competitor1ID: 5,
          Competitor2ID: 7,
          Round: 2,
          ID: 7,
          GroupID: 2,
          StartTime: '2018-04-26T20:49:44.330092562+02:00'
        }
      ],
      [
        {
          Competitor1ID: 0,
          Competitor2ID: 3,
          Round: 3,
          ID: 8,
          GroupID: 1,
          StartTime: '2018-04-26T21:04:44.330092562+02:00'
        },
        {
          Competitor1ID: 4,
          Competitor2ID: 2,
          Round: 3,
          ID: 9,
          GroupID: 1,
          StartTime: '2018-04-26T21:04:44.330092562+02:00'
        },
        {
          Competitor1ID: 6,
          Competitor2ID: 7,
          Round: 3,
          ID: 10,
          GroupID: 2,
          StartTime: '2018-04-26T21:04:44.330092562+02:00'
        },
        {
          Competitor1ID: 5,
          Competitor2ID: 8,
          Round: 3,
          ID: 11,
          GroupID: 2,
          StartTime: '2018-04-26T21:04:44.330092562+02:00'
        }
      ],
      [
        {
          Competitor1ID: 1,
          Competitor2ID: 2,
          Round: 4,
          ID: 12,
          GroupID: 1,
          StartTime: '2018-04-26T21:19:44.330092562+02:00'
        },
        {
          Competitor1ID: 0,
          Competitor2ID: 4,
          Round: 4,
          ID: 13,
          GroupID: 1,
          StartTime: '2018-04-26T21:19:44.330092562+02:00'
        }
      ],
      [
        {
          Competitor1ID: 2,
          Competitor2ID: 3,
          Round: 5,
          ID: 14,
          GroupID: 1,
          StartTime: '2018-04-26T21:34:44.330092562+02:00'
        },
        {
          Competitor1ID: 1,
          Competitor2ID: 4,
          Round: 5,
          ID: 15,
          GroupID: 1,
          StartTime: '2018-04-26T21:34:44.330092562+02:00'
        }
      ]
    ],
    FinalPairings: null,
    PointCalcer: {}
  };

  pairingSections: PairingSection[] = [];
  constructor(private http: Http) {}
  addCompetitor(comp: string) {
    const c: Competitor = { ID: this.getNextCompetitorID(), name: comp };
    this.competitors.push(c);
  }

  getNextCompetitorID(): number {
    let max = 0;
    this.competitors.forEach(element => {
      max = Math.max(max, element.ID);
    });
    return max++;
  }

  getCompetitors(): Competitor[] {
    return this.competitors;
  }
  getGroups(): GroupInfo[] {
    return [
      {
        ID: 1,
        CInfo: [
          { Name: 'Hans', GamePoints: 2, TeamPoints: 5 },
          { Name: 'Benni', GamePoints: 9, TeamPoints: 4 },
          { Name: 'Dani', GamePoints: 2, TeamPoints: 3 }
        ]
      },
      {
        ID: 2,
        CInfo: [
          { Name: 'asdf', GamePoints: 2, TeamPoints: 5 },
          { Name: 'jklö', GamePoints: 9, TeamPoints: 4 },
          { Name: 'oh yeah', GamePoints: 2, TeamPoints: 3 }
        ]
      }
    ];
  }
  getGroupForCompetitor(arg0: any): any {
    return {
      ID: 1,
      CInfo: [
        { Name: 'Hans', GamePoints: 2, TeamPoints: 5 },
        { Name: 'Benni', GamePoints: 9, TeamPoints: 4 },
        { Name: 'Dani', GamePoints: 2, TeamPoints: 3 }
      ]
    };
  }
  saveResult(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  deleteFinalRound(): any {
    throw new Error('Method not implemented.');
  }
  buildTournament(): any {
    throw new Error('Method not implemented.');
  }
  calcFinals(): any {
    throw new Error('Method not implemented.');
  }
  saveDetails(): any {
    throw new Error('Method not implemented.');
  }
  getPairingSections() {
    // return [this.pairingSection, this.pairingSectionFinals];
    return this.http.get('http://localhost:5050/gamePlan').map((resp: Response) => {
      const sections: PairingSection[] = resp.json();
      return sections;
    });
  }

  getPairingSectionForCompetitor(competitorName: string): PairingSection {
    // return this.pairingSection
    const ps: PairingSection = {
      Description: this.pairingSection.Description,
      Pairings: this.pairingSection.Pairings.filter(
        pairing =>
          !competitorName ||
          competitorName === '' ||
          pairing.Comp1Name.toUpperCase() === competitorName.toUpperCase() ||
          pairing.Comp2Name.toUpperCase() === competitorName.toUpperCase()
      )
    };
    return ps;
  }
  getResultInfo(filterID: number): ResultInfo {
    return this.resultInfos.find(element => element.PairingID === filterID);
  }
  getResultInfos(filter: string): Observable<ResultInfos> {
    return this.http.get('http://localhost:5050/results').map((resp: Response) => {
      const resInfos: ResultInfos = resp.json();
      console.log(resInfos);
      const res = resInfos.ResultInfos.filter(
        result =>
          filter === '' ||
          !filter ||
          result.Comp1Name.toUpperCase() === filter.toUpperCase() ||
          result.Comp2Name.toUpperCase() === filter.toUpperCase()
      );
      resInfos.ResultInfos = res;

      return resInfos;
    });
  }
}
