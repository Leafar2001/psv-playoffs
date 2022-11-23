import Player from "./Player";
import Season from "./Season";

export default interface Team {
  Name: String;
  Players: Player[];
  Trophies: Number;
  Seasons: Season[];
}
