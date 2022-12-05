export default interface Player {
  playerId: number;
  playerName: string;
  appearances: number;
  minutesPlayed: number;
  starts: number;
  subOns: number;
  injuryStatus: boolean;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}
