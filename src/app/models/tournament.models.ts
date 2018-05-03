

export class pairingInfo {
    FormattedTime: string
    Court: string
    RoundInfo: string
    Comp1Name: string
    Comp2Name: string
  }
  
  export class pairingSection{
    description: string
    pairings: pairingInfo[]
  }

  class CompetitorInfos {
    Name: string
    GamePoints: number
    TeamPoints: number
  }
  
  // GroupInfo ist for representing a group in HTMl
  export class GroupInfo {
    ID: number
    CInfo: CompetitorInfos[]
  } 
  
  export class competitor{
    ID: number
    name:string
  }

  export class resultInfo {
    PairingID: number
    PairingInfo: string
    // Comp1ID    :number
    Comp1Name: string
    // Comp2ID     :number
    Comp2Name: string
    Pairing1Pts: number
    Pairing2Pts: number
    Group1Pts: number
    Group2Pts: number
    Done: boolean
  }
  
