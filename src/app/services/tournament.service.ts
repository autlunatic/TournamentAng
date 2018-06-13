import { Injectable } from '@angular/core';
import {
  PairingInfo,
  PairingSection,
  GroupInfo,
  Competitor,
  ResultInfo,
  ResultInfos
} from '../models/tournament.models';
import { Response, Headers } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';

@Injectable()
export class TournamentService {
  // competitors: Competitor[] = [{ ID: 1, Name: 'benni' }, { ID: 2, name: 'dani' }, { ID: 3, name: 'Zoé' }];

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

  filterCompName: string;
  pairingSections: PairingSection[] = [];

  constructor(private http: HttpClient) {}

  saveNewCompetitors(comp: string[]) {
    return this.http.post<string>('http://localhost:5050/saveCompetitors', comp).pipe(catchError(this.handleError));
  }

  getCompetitors(): Observable<Competitor[]> {
    return this.http.get<Competitor[]>('http://localhost:5050/competitors');
  }

  getGroups(): Observable<GroupInfo[]> {
    return this.http.get<GroupInfo[]>('http://localhost:5050/groups');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  filterGroupInfoForCompetitor(value, index, ar) {
    value.CInfo.forEach(element => {
      if (element.Name === this.filterCompName) {
        return true;
      }
    });
    return false;
  }

  getGroupForCompetitor(compName: string): Observable<GroupInfo[]> {
    this.filterCompName = compName;
    return this.getGroups().pipe(map((data: GroupInfo[]) => data.filter(this.filterGroupInfoForCompetitor)));
  }

  saveResult(result: ResultInfo): any {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'text'
    });
    return this.http
      .post<ResultInfo>('http://localhost:5050/saveResults', result, { headers: header })
      .pipe(catchError(this.handleError));
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
    return this.http.get<PairingSection[]>('http://localhost:5050/gamePlan');
  }

  getResultInfo(filterID: number): Promise<ResultInfo> {
    return new Promise<ResultInfo>((resolve, reject) => {
      this.getResultInfos('').subscribe((resInfosArray: ResultInfos[]) => {
        let resolved = false;
        console.log(filterID);
        console.log(resInfosArray);
        resInfosArray.forEach(resInfo => {
          const res: ResultInfo = resInfo.ResultInfos.find(element => element.PairingID === filterID);
          if (res) {
            resolve(res);
            resolved = true;
          }
        });
        console.log(resolved);
        if (!resolved) {
          reject(null);
        }
      });
    });
  }

  getResultInfos(filter: string): Observable<ResultInfos[]> {
    return this.http.get<ResultInfos[]>('http://localhost:5050/results').pipe(
      map((resp: ResultInfos[]) => {
        resp.forEach(element => {
          const res = element.ResultInfos.filter(
            result =>
              filter === '' ||
              !filter ||
              result.Comp1Name.toUpperCase() === filter.toUpperCase() ||
              result.Comp2Name.toUpperCase() === filter.toUpperCase()
          );
          element.ResultInfos = res;
        });
        return resp;
      })
    );
  }
}
