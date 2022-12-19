export default interface Prediction {
  userInfo: {
    name: string;
    avatar: string;
  };
  predictions: {
    bestPlayer: string;
    homeScore: number;
    awayScore: number;
    firstGoal: number;
    yellowCards: number;
    redCards: number;
  };
}
