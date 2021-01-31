import { Team } from './team';

export interface MatchTeams {
  home: Team;
  away: Team;
}

export interface GameDay {
  date?: Date;
  dateNumber: number;
  matches: MatchTeams[];
}
