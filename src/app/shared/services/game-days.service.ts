import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { GameDay } from '../models/game-day';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root',
})
export class GameDaysService {
  private gameDaysSrc = new BehaviorSubject<GameDay[]>([]);
  gameDays$ = this.gameDaysSrc.asObservable();

  constructor(private teamsService: TeamsService) {
    this.teamsService.teams$.subscribe(() => this.gameDaysSrc.next([]));
  }

  generateGameDays() {
    this.teamsService.teams$.pipe(take(1)).subscribe((teams) => {
      const teamCount = teams.length;
      const rounds = teamCount - 1;
      const half = teamCount / 2;
      let date = new Date();

      const gameDays: GameDay[] = [];

      const teamIndexes = teams.map((team, i) => i).slice(1);

      for (let round = 0; round < rounds; round++) {
        date = this.getNextSunday(date);
        const gameDay: GameDay = {
          dateNumber: round + 1,
          matches: [],
          date,
        };

        const newTeamIndexes = [0].concat(teamIndexes);

        const firstHalf = newTeamIndexes.slice(0, half);
        const secondHalf = newTeamIndexes.slice(half, teamCount).reverse();
        firstHalf.map((index, i) => {
          gameDay.matches.push({
            home: teams[firstHalf[i]],
            away: teams[secondHalf[i]],
          });
        });
        teamIndexes.push(teamIndexes.shift());
        gameDays.push(gameDay);
      }

      this.gameDaysSrc.next(gameDays);
    });
  }

  getNextSunday(date: Date) {
    var resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + (date.getDay() % 7) + 7);

    return resultDate;
  }
}
