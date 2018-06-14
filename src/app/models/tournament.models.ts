import { Time } from '@angular/common';

export class PairingInfo {
  FormattedTime: string;
  Court: string;
  RoundInfo: string;
  Comp1Name: string;
  Comp2Name: string;
}

export class PairingSection {
  Description: string;
  Pairings: PairingInfo[];
}

class CompetitorInfos {
  Name: string;
  GamePoints: number;
  TeamPoints: number;
}

// GroupInfo ist for representing a group in HTMl
export class GroupInfo {
  ID: number;
  CInfo: CompetitorInfos[];
}

export class Competitor {
  ID: number;
  Name: string;
}

export class ResultInfos {
  Description: string;
  ResultInfos: ResultInfo[];
}

export class ResultInfo {
  PairingID: number;
  PairingInfo: string;
  // Comp1ID    :number
  Comp1Name: string;
  // Comp2ID     :number
  Comp2Name: string;
  Pairing1Pts: number;
  Pairing2Pts: number;
  Group1Pts: number;
  Group2Pts: number;
  Done: boolean;
}

export class TournamentDetails {
  NumberOfParallelGames: number;
  MinutesPerGame: number;
  MinutesAvailForGroupsPhase: number;
  FinalistCount: number;
  TournamentStartTime: Time;
  FinalsStartTime: Time;
}
