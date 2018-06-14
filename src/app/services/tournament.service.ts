import { Injectable } from '@angular/core';
import {
  PairingInfo,
  PairingSection,
  GroupInfo,
  Competitor,
  ResultInfo,
  ResultInfos,
  TournamentDetails
} from '../models/tournament.models';
import { Response, Headers } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';

class Adminfunction {
  Function: string;
  Params: string[];
}

@Injectable()
export class TournamentService {
  // competitors: Competitor[] = [{ ID: 1, Name: 'benni' }, { ID: 2, name: 'dani' }, { ID: 3, name: 'Zoé' }];

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
  getDetails(): Observable<TournamentDetails> {
    return this.http.get<TournamentDetails>('http://localhost:5050/getDetails');
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
    const af: Adminfunction = { Function: 'deleteFinalRound', Params: [] };
    return this.http.post<Adminfunction>('http://localhost:5050/adminFunction', af).pipe(catchError(this.handleError));
  }
  buildTournament(): any {
    const af: Adminfunction = { Function: 'buildTournament', Params: [] };
    return this.http.post<Adminfunction>('http://localhost:5050/adminFunction', af).pipe(catchError(this.handleError));
  }
  calcFinals(): any {
    const af: Adminfunction = { Function: 'calcFinals', Params: [] };
    return this.http.post<Adminfunction>('http://localhost:5050/adminFunction', af).pipe(catchError(this.handleError));
  }
  saveDetails(): any {}
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
